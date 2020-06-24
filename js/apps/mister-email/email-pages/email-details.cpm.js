import { emailService } from "../email-services/email-service.js";

export default {
  template: `
    <section v-if="email">
         <p>{{email}}</p>
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
  }
};
