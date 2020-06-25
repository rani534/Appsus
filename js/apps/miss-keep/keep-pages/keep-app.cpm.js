// import { myRouter } from "../keep-routes.js";
import  { notService }  from '../keep-services/keep-service.js';

import noteTxt from '../keep-cmps/note-txt.cmp.js';
import noteImg from '../keep-cmps/note-Img.cmp.js';
import noteTodos from '../keep-cmps/note-todos.cmp.js';
import noteVideo from '../keep-cmps/note-video.cmp.js';


export default {
    // router: myRouter,
  template: ` 
    <section v-if="currComponent">
       <h1>Keep app</h1>
       <component  :is="currComponent.type" ></component>
       <button>txt</button>
       <button>img</button>
       <button>todos</button>
       <button>video</button>
    </section>
    `,
  data() {
    return {
      currComponent: this.currComponent = notService.getNotes()[0]
    };
  },
  computed: {},
  methods: {},
  // created(){
  //   console.log(notService.getNotes)
  //   this.currComponent = notService.getNotes[0]
  // },
  components: {
    noteTxt,
    noteImg,
    noteTodos,
    noteVideo
  },
};

