// import { myRouter } from "../keep-routes.js";
import  { notService }  from '../keep-services/keep-service.js';

import noteList from '../keep-cmps/keep-list.cmp.js';

//  to tender input
import inputNoteTxt from '../keep-cmps/input-note-txt.cmp.js';
import inputNoteImg from '../keep-cmps/input-note-Img.cmp.js';
import inputNoteTodos from '../keep-cmps/input-note-todos.cmp.js';
import inputNoteVideo from '../keep-cmps/input-note-video.cmp.js';

// to render note



export default {
    // router: myRouter,
  template: ` 
    <section class="keep-app">
       <h1>Keep app</h1>
       <!-- render input -->
       <component :is="currInputComponent" ></component>
       <button @click="changeInputComponent('input-note-txt')">txt</button>
       <button @click="changeInputComponent('input-note-img')">img</button>
       <button @click="changeInputComponent('input-note-todos')">todos</button>
       <button @click="changeInputComponent('input-note-video')">video</button>

       <note-list v-if="notes"></note-list>
    </section>
    `,
  data() {
    return {
      currInputComponent:  notService.getInput()[0],
      notes: null
    };
  },
  computed: {},
  methods: {
    changeInputComponent(type){
     let idx = notService.getInput().findIndex(note => {
        return note === type
      })
      this.currInputComponent =  notService.getInput()[idx]
    }
  },
  created(){
      this.notes = 
  },
  components: {
    inputNoteTxt,
    inputNoteImg,
    inputNoteTodos,
    inputNoteVideo,

    noteList
  },
};


