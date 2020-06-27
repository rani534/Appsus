import { noteService } from "../keep-services/keep-service.js";

export default {
  template: `
   <section>
      <input class="note-input" ref="input" @input="setLastRequest" v-model="txt" @keyup.enter="addImgNote" type="text" placeholder="Enter Img URL..." />
   </section>
    `,
  data() {
    return {
      txt: "",
    };
  },
  methods: {
    addImgNote() {
      noteService.addImgNote(this.txt);
      this.txt = "";
    },
    setLastRequest() {
      noteService.setLastRequest(this.txt);
    },
  },
  created() {
    this.txt = noteService.getLastRequest();
  },
  mounted() {
    this.$refs.input.focus();
  },
};
