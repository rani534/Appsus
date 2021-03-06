import { eventBus } from "../email-services/event-bus.service.js";
export default {
  props: ["email"],
  template: ` 
         <li @mouseout="resetMove" @mouseover="setMove" class="email-preview clean-list flex align-center justify-end" @click="goToDetails">
         <div class="mail-subject-container flex align-center">  
         <div class="envelope" v-show="isMoveOn" >
         <button @click="deleteEmail" class="btn delete-email-btn" title="Delete Email">
             <i class="fas fa-trash-alt"></i>
         </button>
           <button v-if="isRead" @click.stop="mark" class=" btn mark-email"><i class="fas fa-envelope"></i></button>
           <button v-else @click.stop="mark" class="btn unmark-email"><i class="fas fa-envelope-open"></i></button>
         </div> 
            <p class= "email-sender" :class="{bold: email.isRead}">{{email.sentBy}}</p>
            <p class="email-subject" :class="{bold: email.isRead}">{{email.subject}}</p>
            <p>-</p>
            <p class="email-body">{{email.body}}</p>
            <div class="email-time">{{getTime}}</div>
            </div>
        </li>     
          `,
  data() {
    return {
      isRead: this.email.isRead,
      isMoveOn: false
    };
  },
  computed: {
    getTime() {
      let currTime = new Date();
      let time = new Date(this.email.sentAt)
      if (time.getDate() === currTime.getDate() && time.getMonth() === currTime.getMonth()) {
        if(time.toLocaleTimeString().split(':')[0].length === 1) return time.toLocaleTimeString().substring(0,4)
        else return time.toLocaleTimeString().substring(0,5)
      }
      else return `${time.getDate()} / ${time.getMonth() + 1}`
    }
  },
  methods: {
    mark() {
      this.isRead = !this.isRead;
      eventBus.$emit("toggleRead", this.email.id);
    },
    goToDetails() {
      eventBus.$emit("selected", this.email.id);
      this.$router.push("/email/" + this.email.id);
    },
    setMove() {
      this.isMoveOn = true
    },
    resetMove() {
      this.isMoveOn = false
    },
    deleteEmail(){
      eventBus.$emit("delete", this.email.id);
    }
  },
};
