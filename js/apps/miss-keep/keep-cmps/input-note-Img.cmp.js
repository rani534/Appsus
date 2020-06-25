import { noteService } from '../keep-services/keep-service.js';


export default {
    template: `
    <section>
       <input @keyup.enter="addImgNote" type="text" placeholder="Enter img URL...">
   </section>
    `,
      methods: {
        addImgNote() {
          const val = this.$refs.input.value;
          noteService.addImgNote(val)
         
        },
      },
      
}