import {bookService} from '../book-services/book.service.js';



export default {
  template: `
  <section>
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




// import {bookService} from '../book-services/book.service.js';



// export default {
//     template:`
//     <section v-if="googleBooksByAxios">
//         <h1>Add Book</h1>
//         <input ref="input" type="text" placeholder="search in google books" v-model="filterByStr" @input="setFilter">
//         <ul>
//             <li v-for="book in googleBooksByAxios" v-bind:books="booksToShow">{{book.volumeInfo.title}}</li>
//         </ul>

//     </section>
//     `,
//     data(){
//         return {
//             googleBooksByAxios:[],
//             filterByStr: '' 
//           };
//     },
//     methods:{
//         setFilter(filterBy) {
//             this.filterByStr = filterBy;

//             console.log(this.filterByStr);
            
//           },
//           addBook(book){
//               bookService.addGoogleBook(book)
//           }
//     },
//     computed:{
//         booksToShow() {
//             console.log(this.filterByStr);
//             const filterBy = this.filterByStr;
            
//             if (!filterBy) return this.googleBooksByAxios.volumeInfo.title;
//             var filteredBooks = this.googleBooksByAxios.filter((book) => {
//               return book.volumeInfo.title.toLowerCase().includes(filterByStr.toLowerCase());
//             });
//             return filteredBooks;
//         }
//     },
//     created(){
//         console.log('created');
        
//         bookService.getGoogleBooksByAxios()
//             .then((books) => this.googleBooksByAxios = books)
//     },
//     mounted(){
//         this.$refs.input.focus();
//     },
//     destroyed(){

//     }
// }