import { noteService } from "../keep-services/keep-service.js";

export default {
  props: ["note"],
  template: `
   <section class="note-video" >
        <iframe :src="url"></iframe>
        <textarea ref="textarea" v-model="url" v-if="isOnEdit" @blur="setUrl"></textarea>
    </section>
    `,
  data() {
    return {
      url: this.note.info.url
    };
  },
  computed: {
    isOnEdit() {
      return this.note.isOnEdit;
    },
  },
  methods: {
    setUrl() {
      noteService.editVideo(this.note.id, this.url);
    },
  },
};
