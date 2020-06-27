import noteTxt from "./note-txt.cmp.js";
import noteImg from "./note-Img.cmp.js";
import noteTodos from "./note-todos.cmp.js";
import noteVideo from "./note-video.cmp.js";

import noteEdit from './note-edit.cmp.js';



export default {
  props: ["note"],
  template: `
          <li :style="{'background-color': backgroundColor}" v-if="currComponent ,backgroundColor" class="note-preview column-layout ">
            <component :note="note" :is="currComponent"></component> 
            <note-edit :note="note"></note-edit>
         </li>  
      `,
  data() {
    return {
      currComponent: null,
      backgroundColor: null
    };
  },
  created() {
    this.currComponent = this.note.type
    this.backgroundColor = this.note.style.backgroundColor
  },
  components: {
    noteTxt,
    noteImg,
    noteTodos,
    noteVideo,
    noteEdit
  },
};
