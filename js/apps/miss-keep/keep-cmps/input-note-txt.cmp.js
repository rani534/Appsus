import { noteService } from '../keep-services/keep-service.js';


export default {
  template: `
   <section>
      <input  v-model="txt" @keyup.enter="addTxtNote" type="text" placeholder="Enter text...">
   </section>
    `,
    data(){
        return {
          txt: ''
        }
    },
  methods: {
    addTxtNote() { 
      noteService.addTxtNote(this.txt);
      this.txt = ''  ; 
    },
  },
};


