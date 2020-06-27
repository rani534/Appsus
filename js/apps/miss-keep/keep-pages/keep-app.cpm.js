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
    <section class="keep-app ">
    <img class="note-logo-img" src="../../../../imgs/notes-icon.png" >
     

      <div class="add-notes flex ">
           <component :is="currInputComponent" ></component>
        <div class="btn-add-notes-container ">
            <button title="add text" class="btn add-btn add-txt-btn" @click="changeInputComponent('input-note-txt')">
             <i class="fas fa-font"></i>
            </button>
            <button title="add image" class="btn add-btn add-img-btn" @click="changeInputComponent('input-note-img')">
              <i class="far fa-image"></i>
            </button>
            <button title="add todo" class="btn add-btn add-todos-btn" @click="changeInputComponent('input-note-todos')">
             <i class="fas fa-list-ul"></i>
            </button>
            <button title="add video" class="btn add-btn add-video-btn" @click="changeInputComponent('input-note-video')">
             <i class="fab fa-youtube"></i>
            </button>
        </div>     
      </div>     
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
