import emailDetails from "./email-pages/email-details.cpm.js";
// import emailList from './email-cmps/email-list.cmp.js';



const myRoutes = [
  {
    path: "/email/:emailId",
    component: emailDetails,
  },
];

export const myRouter = new VueRouter({ routes: myRoutes });
