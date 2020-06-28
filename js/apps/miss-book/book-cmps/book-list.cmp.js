import bookPreview from "./book-preview.cmp.js";

export default{
  props: ["books"],
  template: `
  <section class="book-list">
        <ul class="book-list-ul clean-list flex wrap align-center justify-center space-around">
            <book-preview  v-for="book in books" :book="book" :key="book.id"/>
        </ul>
        </section>
    `,
  methods: {
    // selectBook(book) {
    //   this.$emit("selected", book);
    // },
  },
  components:{
    bookPreview
  }
}
