import { noteService } from "../keep-services/keep-service.js";

export default {
  template: `
   <section>
      <input class="note-input" ref="input" @input="setLastRequest" v-model="txt" @keyup.enter="addTxtNote" type="text" placeholder="Enter text..." />
   </section>
    `,
  data() {
    return {
      txt: "",
    };
  },
  methods: {
    addTxtNote() {
      noteService.addTxtNote(this.txt);
      this.txt = "";
      noteService.setLastRequest(this.txt);
    },
    setLastRequest() {
      noteService.setLastRequest(this.txt);
    },
  },
  created() {
    this.txt = noteService.getLastRequest();
  },
  mounted(){
    this.$refs.input.focus()
  }
};
