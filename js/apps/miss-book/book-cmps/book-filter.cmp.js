export default{
  template: `
        <section class="book-filter input-container">
        <img class="book-img" src="../../../../imgs/book.jpg">
        <section>
            <input type="text" placeholder="search?" v-model="filterBy.searchStr" @input="filter"/>
            <input type="number" placeholder="max price?" v-model.number="filterBy.maxPrice" @input="filter"/>
        </section>
            </section>
    `,
  data() {
    return {
      filterBy: {
        searchStr: '',
        maxPrice: 0,
      },
    };
  },
  methods: {
    filter() {
      this.$emit("filtered", this.filterBy);
    },
  },
}
