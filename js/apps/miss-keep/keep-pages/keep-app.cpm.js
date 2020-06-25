// import { myRouter } from "../keep-routes.js";
import  { notService }  from '../keep-services/keep-service.js';

import noteTxt from '../keep-cmps/note-txt.cmp.js';
import noteImg from '../keep-cmps/note-Img.cmp.js';
import noteTodos from '../keep-cmps/note-todos.cmp.js';
import noteVideo from '../keep-cmps/note-video.cmp.js';


export default {
    // router: myRouter,
  template: ` 
    <section v-if="objs">
       <h1>Keep app</h1>
       <component  v-for="obj in objs"  :is="obj.type" ></component>
    </section>
    `,
  data() {
    return {
      objs: null
    };
  },
  computed: {},
  methods: {},
  created() {
  this.objs = notService.getNotes()
  },
  components: {
    noteTxt,
    noteImg,
    noteTodos,
    noteVideo
  },
};

