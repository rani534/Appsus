import {bookService} from '../book-services/book.service.js';



export default {
  template: `
  <section class="book-add">
    <input @input="searchBook" type="text" v-model="search" placeholder="search for a book"/>
     <ul v-if="books">
       <li v-for="book in books" :key="book.id">
        {{book.volumeInfo.title}}
         <button @click="addBookToService(book.id)">+</button>
       </li>
    </ul>
 </section>
    `,
  data() {
    return {
      books: null,
      search: null,
    };
  },
  methods: {
    searchBook() {
      if(this.search === '') return this.books = null
      bookService.getGoogleBooksByAxios(this.search)
      .then((books) => {
        this.books = books
        console.log(this.books);
      });
    },
    addBookToService(bookId){
      
      const idx = this.books.findIndex(book =>{
        return book.id === bookId
      });
      const book = this.books[idx];
      bookService.addGoogleBook(book);
      
      this.search = '';
      this.searchBook();
      this.$emit('restartBookList')
    }
  }
};
