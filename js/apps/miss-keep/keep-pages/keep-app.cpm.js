import { noteService } from "../keep-services/keep-service.js";

import noteList from "../keep-cmps/note-list.cmp.js";

//  to tender input
import inputNoteTxt from "../keep-cmps/input-note-txt.cmp.js";
import inputNoteImg from "../keep-cmps/input-note-Img.cmp.js";
import inputNoteTodos from "../keep-cmps/input-note-todos.cmp.js";
import inputNoteVideo from "../keep-cmps/input-note-video.cmp.js";

// to render note

export default {
  template: ` 
    <section class="keep-app">
       <h1>Keep app</h1>
       <!-- render input -->

      <!-- <keep-alive> -->
         <component :is="currInputComponent" ></component>
      <!-- </keep-alive> -->

       <button @click="changeInputComponent('input-note-txt')">txt</button>
       <button @click="changeInputComponent('input-note-img')">img</button>
       <button @click="changeInputComponent('input-note-todos')">todos</button>
       <button @click="changeInputComponent('input-note-video')">video</button>

       <note-list v-if="notes" :notes="notes" ></note-list>
    </section>
    `,
  data() {
    return {
      currInputComponent: noteService.getInput()[0],
      notes: null,
    };
  },
  computed: {},
  methods: {
    changeInputComponent(type) {
      let idx = noteService.getInput().findIndex((note) => {
        return note === type;
      });
      this.currInputComponent = noteService.getInput()[idx];
    },
  },
  created() {
    this.notes = noteService.getNotes();
  },
  components: {
    inputNoteTxt,
    inputNoteImg,
    inputNoteTodos,
    inputNoteVideo,

    noteList,
  },
};
