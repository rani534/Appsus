import { noteService } from "../keep-services/keep-service.js";

export default {
  props: ["note"],
  template: `
   <section class="note-img " >
   <img :src="url" />
        <div class="logo logo-img">
            <i class="far fa-image"></i>
        </div>
        <textarea ref="textarea" v-model="url" v-if="isOnEdit" @blur="setUrl" placeholder="Enter Img URL..."></textarea>
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
      noteService.editImg(this.note.id, this.url);
    },
  },
};
