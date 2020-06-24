import emailDetails from "./email-pages/email-details.cpm.js";
// ישנה בעיה עם פתיחה ברואת חדש כי הוא מתרנדר עם האפליקציה עצמה
const myRoutes = [
  {
    path: "/email/:emailId",
    component: emailDetails,
  },
];

export const myRouter = new VueRouter({ routes: myRoutes });
