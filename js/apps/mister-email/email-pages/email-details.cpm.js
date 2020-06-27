import { emailService } from "../email-services/email-service.js";
import { eventBus } from '../email-services/event-bus.service.js';

export default {
  template: `
    <section v-if="email" class="email-details">
    <button class="btn close-details-btn" @click="close">X</button>
    <h3 class="email-subject">{{email.subject}}</h3>
    
    <h4 class="sent-by">{{email.sentBy}}<span class="email-address"><{{email.emailAddress}}></span></h4>
         <p class="email-details-p">{{email.body}}</p>
    </section>
    `,
  data() {
    return {
      email: null,
    };
  },
  created(){
    const {emailId} = this.$route.params;
    emailService.getEmailById(emailId)
      .then((email) => {

         this.email = email
      })
  },
  methods:{
    close() {
      eventBus.$emit('exit')
        this.$router.push("/email");
    }
  },
};
