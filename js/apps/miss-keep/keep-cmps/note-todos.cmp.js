import { noteService } from "../keep-services/keep-service.js";

// TODOS:
export default {
  props: ["note"],
  template: `
   <section class="note-todos" >
       <ul>
       
           <li :class="{marked : todos[idx].doneAt }" class="flex space-between" @click="mark(idx)" v-for="(todo,idx) in todos">
            {{todo.txt}} 
            <button @click.stop="deleteTodo(idx)" v-if="isOnEdit" class="delete-todo-btn" >x</button>
           </li>
        </ul>
        <div class="logo logo-todos">
          <i class="fas fa-list-ul"></i>
        </div>
        <textarea  v-model="currTodo" v-if="isOnEdit" @blur="setTodo" placeholder="Add note..."></textarea>
        </ul>
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

