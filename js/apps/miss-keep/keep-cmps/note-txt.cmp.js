import { noteService } from "../keep-services/keep-service.js";

export default {
  props: ["note"],
  template: `
   <section class="note-txt" >
        <p>{{txt}}</p>
        
        <div class="logo logo-txt">
          <i class="fas fa-font"></i>
        </div>        
        <textarea  ref="textarea" v-model="txt" v-if="isOnEdit" @blur="setTxt" placeholder="Enter text..."></textarea>
    </section>
    `,
  data() {
    return {
      txt: this.note.info.txt
    };
  },
  computed: {
    isOnEdit() {
      return this.note.isOnEdit;
    },
  },
  methods: {
    setTxt() {
      noteService.editTxt(this.note.id, this.txt);
    },
  },
};
