import { myRouter } from "./book-routes.js";
import appHeader from "./book-cmps/app-header.cmp.js";

export default{
  router: myRouter,
  template: `
  <div>
    <app-header></app-header>
    <main>
     <router-view />
    </main>
  </div>
  `,
  components:{
    appHeader
  }
}
