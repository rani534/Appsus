import { emailService } from '../email-services/email-service.js';

export default {
    template: `
    <section class="add-email">
        <form class="add-email-form column-layout" @submit.prevent="send">
            <input type="text" ref="input" class="send-to" placeholder="To:"/>
            <input v-model="newEmail.subject" type="text" class="email-subject" placeholder="Subject:"/>
            <textarea v-model="newEmail.body" class="email-body-textarea" placeholder=""></textarea>
        <button>Send</button>
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
            this.$emit('sended')
            emailService.addEmail(this.newEmail)
        }
    },
    mounted() {
        this.$refs.input.focus()


    }

}