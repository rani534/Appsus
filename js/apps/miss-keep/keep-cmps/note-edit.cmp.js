import { noteService } from '../keep-services/keep-service.js';


export default {
    props: ["note"],
    template: `
    <section class="note-edit">
        
        <button :style="{ backgroundColor: backgroundColor}" class="pin-btn">
            <i class="fas fa-thumbtack"></i>
        </button>
        <input ref="colorInput" v-model="backgroundColor" type="color" hidden/>
        <button class="note-bgc-btn">
            <i class="fas fa-palette palette"></i>
        </button>
        <button @click="deleteNote" class="delete-btn">
            <i class="fas fa-trash-alt"></i>
        </button>
        <button class="edit-btn" @click="editNote">
        <i class="fas fa-edit"></i>
        </button>
        <button class="copy-btn">
            <i class="fas fa-clone"></i> 
        </button>
    </section>
    `,
    data() {
        return {
            backgroundColor: ''
        }
    },
    methods: {
        deleteNote() {
            noteService.deleteNote(this.note.id)
        },
        editNote(){
            noteService.setEditMode(this.note.id)  
        }
    },
    computed: {
        inputColor() {
            this.backgroundColor = this.$refs.colorInput
        }
    }
}

