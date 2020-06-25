export default {
  props: ["emails"],
  template: `
    <section class="email-status">      
      <h3 v-if="emails">{{getNumOfReadEmails}}</h3>
    </section>
      `,
//   data(){
//       return {
//           readEmail:
//       }
//   },
  computed: {
    getNumOfReadEmails() {
      const emails =  this.emails.filter(email =>{
          return email.isRead
      })
      return emails.length
    },
  },
};
