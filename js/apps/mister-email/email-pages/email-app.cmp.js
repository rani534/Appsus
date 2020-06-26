import { emailService } from "../email-services/email-service.js";
import { myRouter } from "../email-routes.js";
import { eventBus } from '../email-services/event-bus.service.js';


import emailList from "../email-cmps/email-list.cmp.js";
import emailHeader from '../email-cmps/email-header.cmp.js'
import emailStatus from '../email-cmps/email-status.cmp.js'



export default {
  router: myRouter,
  template: `
    <section class="email-app">
       <h1>EMAIL app</h1>
       <email-header ></email-header>
       <email-status :emails="emails"></email-status>
       <email-list v-if="!selectedEmail" :emails="emailToShow" ></email-list>
         
       <main>
           <router-view/> 
       </main>
    </section>
    `,
  data() {
    return {
      emails: null,
      search: null,
      selectedEmail: null,
      filterBy: 'all'

    };
  },
  computed: {
    emailToShow() {
      if (this.filterBy === 'all') return this.emails;
      if (this.filterBy === 'read') {
        const emails = this.emails.filter((email) => {
          return email.isRead
        })
        return emails
      } 
      if (this.filterBy === 'unRead') {
        const emails = this.emails.filter((email) => {
          return !email.isRead
        })
        return emails
      }
      else{
        const filteredemails = this.emails.filter((email) => {
          return email.subject.toLowerCase().includes(this.filterBy.toLowerCase());
        })
          return filteredemails
    }

    },
  },
  methods: {
    toggleIsRead(emailId) {
      emailService.toggleIsRead(emailId)
        .then(emails => {
          this.emails = emails
        })
    },
    setFilter(filterBy) {
      this.filterBy = filterBy;
    },
  },
  components: {
    emailList,
    emailHeader,
    emailStatus,

  },
  created() {
    emailService.query().then((emails) => (this.emails = emails));
    eventBus.$on('selected', () => {
      this.selectedEmail = !this.selectedEmail
    });
    eventBus.$on('toggleRead', (emailId) => {
      this.toggleIsRead(emailId)
    });
    eventBus.$on('filtered', (filterBy) => {
      this.setFilter(filterBy)
    });
  }
};


