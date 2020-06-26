import { noteService } from "../keep-services/keep-service.js";

// TODOS:
export default {
  props: ["note"],
  template: `
   <section class="note-todos column-layout" >
       <ul>
           <li :class="{marked : todos[idx].doneAt }" @click="mark(idx)" v-for="(todo,idx) in todos">
           {{todo.txt}}
            <button @click="deleteTodo(idx)" v-if="isOnEdit" class="delete-todo-btn" >x</button>
           </li>
        </ul>
        <textarea  v-model="currTodo" v-if="isOnEdit" @change="setTodo"></textarea>
    </section>
    `,
  data() {
    return {
      todos: this.note.info.todos,
      currTodo: '',
    };
  },
  computed: {
    isOnEdit() {
      return this.note.isOnEdit;
    },
  },
  methods: {
    setTodo() {
        console.log(this.isOnEdit);
        noteService.editTodo(this.note.id, this.currTodo);
        this.currTodo = ''
    },
    mark(idx) {
        noteService.toggleMarkTodo(this.note.id , idx)
    },
    deleteTodo(idx) {
      noteService.deleteTodo(this.note.id, idx);
    },
  },
};
