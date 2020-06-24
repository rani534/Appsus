// import homePage from './pages/home-page.cmp.js';
import bookApp from './book-cmps/book-app.cmp.js';
import bookDetails from './book-cmps/book-details.cmp.js';
import homePage from './book-cmps/home-page.cmp.js';
import about from './book-cmps/about.cmp.js';
import bookAdd from './book-cmps/book-add.cmp.js'


const myRoutes = [
    {
        path: '/book/:bookId',
        component: bookDetails
    },
    {
        path: '/',
        component: homePage
    },
    {
        path: '/about',
        component: about
    },
    {
        path: '/add',
        component: bookAdd
    },
];

export const myRouter = new VueRouter({ routes: myRoutes })



