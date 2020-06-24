import homePage from './pages/home-page.cmp.js'
import missBooks from './apps/miss-book/book-main.js'


const myRoutes = [

    
    {
        path: '/',
        component: homePage
    
    },
   
    // {
    //     path: '/about',
    //     component: about
    
    // },
   
    // {
    //     path: '/keep',
    //     component: missKeep
    
    // },
   
    // {
    //     path: '/email',
    //     component: misterEmail
    
    // },

    {
        path: '/book',
        component: missBooks
    
    },
   
];

export const myRouter = new VueRouter({ routes: myRoutes })
