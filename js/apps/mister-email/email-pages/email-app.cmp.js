import { myRouter } from '../email-routes.js';

export default {
  router: myRouter,
  template: `
    <section>
       <h1>EMAIL app</h1>
       <main>
           <router-view /> 
       </main>
    </section>
    `,
  data() {
    return{
          
    }
  },
  computed: {},
  methods: {},
  created() {},
  components: {},
};
