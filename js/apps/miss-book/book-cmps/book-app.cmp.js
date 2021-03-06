import bookList from "./book-list.cmp.js";
import bookFilter from "./book-filter.cmp.js";
import bookAdd from './book-add.cmp.js'


import { bookService } from "../book-services/book.service.js";
import { myRouter } from "../book-routes.js";

import   { eventBus } from '../book-services/event-bus.service.js'
 
export default {
  router: myRouter,
  template: `
        <main class="book-app app-main">
            <router-view />
            <book-add @restartBookList="restart"></book-add> 
            <book-filter @filtered="setFilter"></book-filter>
            <book-list v-if="!selectedBook" v-bind:books="booksToShow" ></book-list>
        </main>
    `,
  data() {
    return {
      books: null,
      filterBy: null,
      selectedBook: null,
    };
  },
  computed: {
    booksToShow() {
      const filterBy = this.filterBy;
      if (!filterBy) return this.books;

      //    FILTER BY TITLE:
      var filteredBooks = this.books.filter((book) => {
        return book.title.toLowerCase().includes(filterBy.searchStr.toLowerCase());
      });
          

      // FILTER BY PRICE RANGE:
      filteredBooks = filteredBooks.filter((book) => {
        return (filterBy.maxPrice)? book.listPrice.amount < filterBy.maxPrice : this.books;
      });
      return filteredBooks;
    },
  },
  methods: {
    setFilter(filterBy) {
      this.filterBy = filterBy;
    },
    // selectBook(book) {
    //   this.selectedBook = book;
    // },
    restart(){
      bookService.query()
      .then(books => this.books = books);
    }
  },
  created() {
    bookService.query()
      .then(books => {
        this.books = books;
      });
      eventBus.$on('selected' , () => {
        this.selectedBook = !this.selectedBook
    }); 
  },
  components:{
    bookList,
    bookFilter,
    bookAdd
  }
}
