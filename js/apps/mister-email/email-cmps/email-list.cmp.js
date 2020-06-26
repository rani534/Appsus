import emailPreview from './email-preview.cmp.js';


export default {
  props: ["emails"],
  template: `
        <ul class="email-list "> 
           <email-preview  v-for="email in emails"  :email="email" :key="email.id" ></email-preview>
        </ul>
      `,
  methods: {

  },
  components: {
    emailPreview
  },
}


