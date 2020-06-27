export default {
  props: ["emails"],
  template: `
    <section class="email-status" v-if="emails">      
      {{getNumOfReadEmails}}
      
    </section>
      `,
  //   data(){
  //       return {
  //           readEmail:
  //       }
  //   },
  computed: {
    getNumOfReadEmails() {
      const emails = this.emails.filter(email => {
        return email.isRead
      })
      return emails.length
    },
  },
};
