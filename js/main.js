import { myRouter } from "./routes.js";
import appHeader from './cmps/app-header.cmp.js';

new Vue({
    el: "#app",
    router: myRouter,
    template: `
    <div >
      <app-header></app-header>
        <main class="main-appsus">
            <router-view />
        </main>




    </div>
    `,
    components: {
        appHeader
    },
    created(){
        // this.$router.push("/");
    }
});

