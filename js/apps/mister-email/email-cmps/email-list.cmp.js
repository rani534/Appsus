import  emailPreview  from './email-preview.cmp.js'

export default {
  props: ["emails"],
  template: `
        <ul class="email-list"> 
            <!-- <button>read</button> -->
           <email-preview v-for="email in emails"  :email="email" :key="email.id" ></email-preview>
        </ul>
      `,
  methods: {
    // selectBook(book) {
    //   this.$emit('selected', book);
    // },
  },
  components :{
    emailPreview 
  },
}


