import { noteService } from "../keep-services/keep-service.js";


export default {
  template: `
   <section>
     <input  v-model="txt" @keyup.enter="addTodosNote" type="text" placeholder="Enter comma separated list..."/>
   </section>
    `,
    data(){
      return {
        txt: ''
      }
    },
  // methods: {
  //   addTodosNote() {
  //     noteService.addTodosNote(this.txt);
  //     this.txt = '';
  //   },
  // },
  // created(){
  //   this.input = '';
  // }
};


