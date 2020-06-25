import { emailService } from "../email-services/email-service.js";
import { myRouter } from "../email-routes.js";
import { eventBus} from '../email-services/event-bus.service.js';

import emailList from "../email-cmps/email-list.cmp.js";
import emailHeader from '../email-cmps/email-header.cmp.js'
import emailStatus from '../email-cmps/email-status.cmp.js'

export default {
  router: myRouter,
  template: `
    <section class="email-app">
       <h1>EMAIL app</h1>
       <email-header ></email-header>
       <email-status :emails="emails"> </email-status>
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

      
    };
  },
  computed: {
    emailToShow() {
      return this.emails;
    },
  },
  methods: {},

  components: {
    emailList,
    emailHeader,
    emailStatus
  },
  created(){
    emailService.query().then((emails) => (this.emails = emails));
    eventBus.$on('selected' , () => {    
      this.selectedEmail = !this.selectedEmail
    }); 
  }
};


