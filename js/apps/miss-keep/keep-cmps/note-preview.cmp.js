import noteTxt from "./note-txt.cmp.js";
import noteImg from "./note-Img.cmp.js";
import noteTodos from "./note-todos.cmp.js";
import noteVideo from "./note-video.cmp.js";




export default {
  props: ["note"],
  template: `
          <li v-if="currComponent" class="note-preview">
            <component :is="currComponent" ></component>       
          </li>
      `,
  data() {
    return {
      currComponent: null,
    };
  },
  created() {
    this.currComponent = this.note.type
  },
  components: {
    noteTxt,
    noteImg,
    noteTodos,
    noteVideo,
  },
};
