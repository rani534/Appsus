
import { emailService } from '../email-services/email-service.js';

export default {
  props: ["email"],
  template: ` 
         <li class="email-preview clean-list " @click="goToDetails">
            <p :class=""> {{email}}
                <span v-if="isRead" @click.stop="mark" class="mark-email"><i class="fas fa-check-square"></i></span>
                <span v-else @click.stop="mark" class="unmark-email"><i class="far fa-square"></i></span>
            </p>
         </li>

          `,
  data() {
    return {
      isRead: this.email.isRead,
      
    };
  },
  methods: {
    mark() {
      this.isRead = !this.isRead;

    },
    goToDetails(){
        this.$router.push('/email/'+ this.email.id)
    }
  },
};
