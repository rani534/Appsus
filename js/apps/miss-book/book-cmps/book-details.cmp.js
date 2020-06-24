import { bookService } from "../book-services/book.service.js";
import bookReview from './book-review.cmp.js'
export default{
  template: `
        <section class="book-details" v-if="book">
        <div>
        <button @click="close">X</button>
        <router-link to="/book">Back</router-link>
        </div>
        <span><img v-if="isOnSale" src="./icons/sale.png"></span>
        <h1 :class="getColor">{{getCurrency}}{{price}}</h1>
        <book-review :book="book"></book-review>
        <div class="flex">
        <img class="thumbnail" :src="book.thumbnail" />
        <div class="column-layout">
        <div class="flex">
        <h4>{{getReadinExperience}}</h4>
        <span><h4>{{getTimeOfPublish}}</h4></span>
        </div> 
        <div class="flex">        
        <div class="column-layout">        
        Title:
        <h1>{{book.title}}</h1>
        Subtitle:
        <h3 class="sub">{{book.subtitle}}</h3>
        Author:
        <h4>{{book.authors[0]}}<span v-if="authors">et al.</span></h4>
        </div>
        Description:
        <p class="desc">{{book.description}}</p>
        </div>
        </div>
        </div>
        </section>        
    `,
  data() {
    return {
      book:null,
    };
  },
  computed: {
    getReadinExperience() {
      let lengthOfBook;
      if (this.book.pageCount > 500) lengthOfBook = "Long reading!!!!";
      if (this.book.pageCount < 500 && this.book.pageCount > 200)
        lengthOfBook = "Decent Reading!!!";
      if (this.book.pageCount < 100) lengthOfBook = "Light Reading...";
      return lengthOfBook;
    },
    getTimeOfPublish() {
      const currentYear = new Date().getFullYear();
      const yearOfPublish = this.book.publishedDate;
      const bookAge = currentYear - yearOfPublish;
      if (bookAge > 10) return "Veteran Book!!";
      if (bookAge < 1) return "New!!!!!";
    },
    getColor() {
      return {
        red: this.bookPrice > 150,
        green: this.bookPrice < 20,
      };
    },
    getCurrency() {
      switch (this.book.listPrice.currencyCode) {
        case "EUR":
          return "€";
        case "USD":
          return "$";
        case "ILS":
          return "₪";
      }
    },
    price(){
      return this.book.listPrice.amount;
    },
    isOnSale(){
      return this.book.listPrice.isOnSale;
    },
    authors(){
      return this.book.authors.length > 1;
    }
  },
  methods: {
    close() {
      this.$router.push('/book')
  }
  },
  components:{
    bookReview
  },
  created(){
    const {bookId} = this.$route.params;
        bookService.getBookById(bookId)
            .then(book => {
                this.book = book;
            })
  }
}

