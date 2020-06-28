export default{
  template: `
        <section class="book-filter input-container">
        <img class="book-img" src="imgs/book.jpg">
        <section class="book-filter-container">
        <i class="fas fa-search"></i>
            <input class="txt-input" type="text" placeholder="search in books..." v-model="filterBy.searchStr" @input="filter"/>
            <input class="num-input" type="number" placeholder="max price?" v-model.number="filterBy.maxPrice" @input="filter"/>
        </section>
            </section>
    `,
  data() {
    return {
      filterBy: {
        searchStr: '',
        maxPrice: '',
      },
    };
  },
  methods: {
    filter() {
      this.$emit("filtered", this.filterBy);
    },
  },
}
