
import bookDetails from './book-cmps/book-details.cmp.js';
import bookAdd from './book-cmps/book-add.cmp.js'


const myRoutes = [
    {
        path: '/book/:bookId',
        component: bookDetails
    },
    {
        path: '/add',
        component: bookAdd
    },
];

export const myRouter = new VueRouter({ routes: myRoutes })



