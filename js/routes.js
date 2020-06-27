import homePage from "./pages/home-page.cmp.js";
import missBooks from './apps/miss-book/book-cmps/book-app.cmp.js';
import missKeep from './apps/miss-keep/keep-pages/keep-app.cpm.js';
import misterEmail from './apps/mister-email/email-pages/email-app.cmp.js';

const myRoutes = [
  {
    path: "/",
    component: homePage,
  },
  
  {
    path: "/book",
    component: missBooks,
  },
  {
    path: "/keep",
    component: missKeep,
  },
  {
    path: "/email",
    component: misterEmail,
  },
];

export const myRouter = new VueRouter({ routes: myRoutes });
