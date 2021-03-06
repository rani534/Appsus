import { emailService } from '../email-services/email-service.js';

export default {
    template: `
    <section class="add-email">
        <form class="add-email-form column-layout" @submit.prevent="send">
            <input type="text" ref="input" class="send-to" placeholder="To:"/>
            <input v-model="newEmail.subject" type="text" class="email-subject" placeholder="Subject:"/>
            <textarea v-model="newEmail.body" class="email-body-textarea" placeholder=""></textarea>
            <div class="add-btns-container flex space-between">
                <button class="btn send-btn">Send</button>
                <span @click="deleted" class="delete-btn"><i class="fas fa-trash-alt"></i></span> 
            </div>
        </form>
    </section>
    `,
    data() {
        return {
            newEmail: {
                subject: '',
                body: '',
            },
        }
    },
    methods: {
        send() {
            this.$emit('backToList')
            emailService.addEmail(this.newEmail)
        },
        deleted(){
            this.$emit('backToList')
        }
    },
    mounted() {
        this.$refs.input.focus()

    }
}