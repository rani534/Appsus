export default {
  props: ["emails"],
  template: `
      <h3 v-if="emails">{{getNumOfReadEmails}}</h3>
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
