import noteTxt from "../keep-cmps/note-txt.cmp.js";
import noteImg from "../keep-cmps/note-Img.cmp.js";
import noteTodos from "../keep-cmps/note-todos.cmp.js";
import noteVideo from "../keep-cmps/note-video.cmp.js";

export default {
  props: ["keep"],
  template: `
          <li v-if="currComponent" class="keep-preview">
         <component :is="currComponent" ></component>       
          </li>
      `,
  data() {
    return {
      currComponent: null,
    };
  },
  created() {
    this.currComponent = this.keep.type
  },
  component: {
    noteTxt,
    noteImg,
    noteTodos,
    noteVideo,
  },
};
