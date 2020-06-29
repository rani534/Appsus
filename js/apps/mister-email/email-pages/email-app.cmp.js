import { emailService } from "../email-services/email-service.js";
import { myRouter } from "../email-routes.js";
import { eventBus } from "../email-services/event-bus.service.js";
import emailList from "../email-cmps/email-list.cmp.js";
import emailFilter from "../email-cmps/email-filter.cmp.js";
import emailStatus from "../email-cmps/email-status.cmp.js";
import addEmail from "../email-cmps/add-email.cpm.js";

export default {
  router: myRouter,
  template: `
    <section class="email-app">
    <div class="screen" @click="closeNav"></div>
    <email-filter></email-filter>
    <div class="app-container flex">
    <h1 class="email-logo">Susmail</h1>
       <nav class="email-nav-bar column-layout">
       <button class="compose-btn" @click="addEmail">Compose +</button>
       <div class="inbox-container"><p class="p-inbox">Inbox</p><email-status :emails="emails"></email-status></div>
       <p class="star-btn">Starred
       <i class="far fa-star"></i>
       </p>
       <p>Sent Mail</p>
       <p>Drafts</p>
       </nav> 
       <nav ref="nav" id="alternative-nav" class="alternative-email-nav-bar column-layout">
       <button class="compose-btn" @click.stop="addEmail">Compose +</button>
       <div class="inbox-container"><p class="p-inbox">Inbox</p><email-status :emails="emails"></email-status></div>
       <p class="star-btn">Starred
       <i class="far fa-star"></i>
       </p>
       <p>Sent Mail</p>
       <p>Drafts</p>
       </nav> 
       <div @click="openNavBar" class="hamburger-btn"><i class="fas fa-bars"></i>
       </div>
       <add-email  @backToList="backToList" v-if="isAddingEmail"></add-email>
       <email-list v-if="!selectedEmail" :emails="emailToShow" ></email-list> 
         
       <main style="background:none;">
           <router-view/> 
       </main>
       </div>
    </section>
    `,
  data() {
    return {
      emails: null,
      search: null,
      selectedEmail: false,
      filterBy: "all",
      isAddingEmail: false,
    };
  },
  computed: {
    emailToShow() {
      if (this.filterBy === "all") return this.emails;
      if (this.filterBy === "read") {
        const emails = this.emails.filter((email) => {
          return email.isRead;
        });
        return emails;
      }
      if (this.filterBy === "unRead") {
        const emails = this.emails.filter((email) => {
          return !email.isRead;
        });
        return emails;
      } else {
        const filteredemails = this.emails.filter((email) => {
          return email.subject
            .toLowerCase()
            .includes(this.filterBy.toLowerCase());
        });
        return filteredemails;
      }
    },
  },
  methods: {
    toggleIsRead(emailId) {
      emailService.toggleIsRead(emailId).then((emails) => {
        this.emails = emails;
      });
    },
    setFilter(filterBy) {
      this.filterBy = filterBy;
    },
    addEmail() {
      this.selectedEmail = true;
      this.isAddingEmail = true;
      this.$refs.nav.style.display = 'none';
      
      document.body.classList.remove('menu-open');
    },
    backToList() {
      this.selectedEmail = false;
      this.isAddingEmail = false;
    },
    unMarkEmail(emailId) {
      emailService.unMarkEmail(emailId).then((emails) => {
        this.emails = emails;
      });
    },
    deleteEmail(emailId) {
      emailService.deleteEmail(emailId)
      .then(emails => {
        this.emails = emails;
      })
    },
    openNavBar(){
      this.$refs.nav.style.display = 'block';
      document.body.classList.toggle('menu-open')
    },
    closeNav(){
      this.$refs.nav.style.display = 'none';
      document.body.classList.toggle('menu-open');
    }
  },
  components: {
    emailList,
    emailFilter,
    emailStatus,
    addEmail,
  },
  created() {
    emailService.query().then((emails) => (this.emails = emails));
    eventBus.$on("selected", (emailId) => {
      this.selectedEmail = !this.selectedEmail;
      this.unMarkEmail(emailId);
    });
    eventBus.$on("exit", () => {
      this.selectedEmail = !this.selectedEmail;
    });
    eventBus.$on("toggleRead", (emailId) => {
      this.toggleIsRead(emailId);
    });
    eventBus.$on("filtered", (filterBy) => {
      this.setFilter(filterBy);
    });
    eventBus.$on("delete", (emailId) => {
      this.deleteEmail(emailId);
    });
  },
};
