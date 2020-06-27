import { noteService } from '../keep-services/keep-service.js';




export default {
    props: ["note"],
    template: `
    <section class="note-edit" >


        
        <button  class="btn pin-btn" title="Pin note">
            <i class="fas fa-thumbtack"></i>
        </button>
        <input ref="colorInput" v-model="backgroundColor" @change="setBgc(note.id)" type="color" hidden/>
        <button @click="inputColor" class="btn note-bgc-btn "title="Background color">
            <i class="fas fa-palette palette"></i>
        </button>
        <button @click="deleteNote" class="btn delete-btn" title="Delete note">
            <i class="fas fa-trash-alt"></i>
        </button>
        <button class="btn edit-btn" @click="editNote" title="Edit note">
           <i class="fas fa-edit"></i>
        </button>
        <button class="btn copy-btn" title="Copy note">
            <i class="fas fa-clone"></i> 
        </button>
    </section>
    `,
    data() {
        return {
            backgroundColor: this.note.style.backgroundColor
        }
    },
    methods: {
        deleteNote() {
            noteService.deleteNote(this.note.id)
        },
        editNote(){
            noteService.setEditMode(this.note.id)  
        },
        inputColor() {
            this.note.backgroundColor = this.$refs.colorInput.click()            
        },
        setBgc(noteId){
            noteService.setBgc(noteId, this.backgroundColor)
        }
    },
}

