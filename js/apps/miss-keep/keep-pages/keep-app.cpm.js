// import { myRouter } from "../keep-routes.js";
import  { notService }  from '../keep-services/keep-service.js';



import noteTxt from '../keep-cmps/note-txt.cmp.js';
import noteImg from '../keep-cmps/note-Img.cmp.js';
import noteTodos from '../keep-cmps/note-todos.cmp.js';
import noteVideo from '../keep-cmps/note-video.cmp.js';


export default {
    // router: myRouter,
  template: ` 
    <section >
       <h1>Keep app</h1>
       <component :is="currComponent" ></component>
       <button @click="currInputComponent('note-txt')">txt</button>
       <button @click="changeComponent('note-img')">img</button>
       <button @click="changeComponent('note-todos')">todos</button>
       <button @click="changeComponent('note-video')">video</button>

       <
    </section>
    `,
  data() {
    return {
      currInputComponent:  notService.getComponent()[0]
    };
  },
  computed: {},
  methods: {
    changeComponent(type){
     let idx = notService.getComponent().findIndex(note => {
        return note === type
      })
      this.currComponent =  notService.getComponent()[idx]
    }
  },
  
  components: {
    noteTxt,
    noteImg,
    noteTodos,
    noteVideo
  },
};

