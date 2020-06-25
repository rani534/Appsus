import { noteService } from "../keep-services/keep-service.js";

export default {
  template: `
   <section>
      <input ref="input" @input="setLastRequest" v-model="txt" @keyup.enter="addVideoNote" type="text" placeholder="Enter Video URL..." />
   </section>
    `,
  data() {
    return {
      txt: "",
    };
  },
  methods: {
    addVideoNote() {
      noteService.addVideoNote(this.txt);
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
