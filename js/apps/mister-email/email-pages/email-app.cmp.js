import { myRouter } from '../email-routes.js'
import { emailService } from '../email-services/email-service.js'

import emailList from '../email-cmps/email-list.cmp.js'


export default {
  router: myRouter,
  template: `
    <section class="email-app">
       <h1>EMAIL app</h1>
         <email-list  :emails="emailToShow" ></email-list>
         
       <main>
           <router-view/> 
       </main>
    </section>
    `,
  data() {
    return{
          emails: null
    }
  },
  computed: {
    emailToShow(){
        return this.emails 
    }
  },
  methods: {},
  created() {
    emailService.query()
        .then(emails => this.emails = emails);

  },
  components: {
     emailList,
  },
};




// export default {
//   props: ["emails"],
//   template: `
//     <h3>{{getNumOfReadEmails}}</h3>
//     `,
//     // data(){
//     //     return {
//     //         readEmail: 
//     //     }
//     // },
//   computed: {
//     getNumOfReadEmails() {
//       const readEmail = this.emails.filter((email) => {
//         return email.isRead === true
//       });
//       console.log(readEmail);
//      return this.emails
//     },
//   },

// };