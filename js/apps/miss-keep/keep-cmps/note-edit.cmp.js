import { noteService } from '../keep-services/keep-service.js';


export default {
    props: ["note"],
    template: `
    <section class="note-edit flex">
        <div style="width: 30px; height: 30px; background-color: aqua;" >logo</div>
        <button :style="{ backgroundColor: backgroundColor}" class="pin-btn">pin</button>
        <input ref="colorInput" v-model="backgroundColor" type="color" hidden/>
        <button class="note-bgc-btn">color</button>
        <button @click="deleteNote" class="delete-btn">delete</button>
        <button class="edit-btn">edit</button>
        <button class="copy-btn">copy</button>
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
    },
    computed: {
        inputColor() {
            this.backgroundColor = this.$refs.colorInput
        }
    }
}

