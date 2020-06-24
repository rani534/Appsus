import { myRouter } from "../keep-routes.js";

export default {
    router: myRouter,
  template: ` 
    <section>
       <h1>Keep app</h1>
       <main>
           <router-view /> 
       </main>
    </section>
    `,
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {},
  components: {},
};
