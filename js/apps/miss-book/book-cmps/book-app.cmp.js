import bookList from "./book-list.cmp.js";
import bookFilter from "./book-filter.cmp.js";
import bookAdd from './book-add.cmp.js'


import { bookService } from "../book-services/book.service.js";
import { myRouter } from "../book-routes.js";


export default {
  router: myRouter,
  template: `
        <main class="app-main book-app">
            <router-view />
            <book-add @restartBookList="restart"></book-add> 
            <book-filter @filtered="setFilter"></book-filter>
            <book-list  v-bind:books="booksToShow" @selected="selectBook" ></book-list>
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
    selectBook(book) {
      this.selectedBook = book;
    },
    restart(){
      bookService.query()
      .then(books => this.books = books);
    }
  },
  created() {
    bookService.query()
      .then(books => {
        this.books = books;
      })
  },
  components:{
    bookList,
    bookFilter,
    bookAdd
  }
}
