import { noteService } from "../keep-services/keep-service.js";

export default {
  template: `
   <section>
        <input @keyup.enter="addVideoNote" type="text" placeholder="Enter video URL..">
   </section>
    `,
  methods: {
    addVideoNote() {
      const val = this.$refs.input.value;
      noteService.addVideoNote(val);
    },
  },
};


