import { noteService } from "../keep-services/keep-service.js";

export default {
    props: ["note"],
    template: `
   <section class="note-video" >
        <iframe :src="url"></iframe>
        <div class="logo logo-video">
            <i class="fab fa-youtube"></i>
        </div>
        <textarea ref="textarea" v-model="url" v-if="isOnEdit" @blur="setUrl"  placeholder="Enter Video URL..."></textarea>
    </section>
    `,
    data() {
        return {
            url: this.note.info.url
        };
    },
    computed: {
        isOnEdit() {
            return this.note.isOnEdit;
        },
    },
    methods: {
        setUrl() {
            noteService.editVideo(this.note.id, this.url);
        },
    },
};
