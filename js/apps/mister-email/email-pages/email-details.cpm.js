import { emailService } from "../email-services/email-service.js";
import { eventBus } from '../email-services/event-bus.service.js';

export default {
  template: `
    <section v-if="email" class="email-details">
    <button @click="close">X</button>
         <p>{{email.body}}</p>
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
      eventBus.$emit('selected')
        this.$router.push("/email");
    }
  },
};
