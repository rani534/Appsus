import { eventBus } from "../email-services/event-bus.service.js";
export default {
  props: ["email"],
  template: ` 
         <li @mouseout="resetMove" @mouseover="setMove" class="email-preview clean-list flex align-center justify-end" @click="goToDetails">
           <h4>{{getTime}}</h4>
            <p class="email-body">{{email.body}}</p>
            <p>-</p>
            <p class="email-subject" :class="{bold: email.isRead}">{{email.subject}}</p>
            <div  class="envelope" v-show="isMoveOn" >
              <button v-if="isRead" @click.stop="mark" class=" btn mark-email"><i class="fas fa-envelope"></i></button>
              <button v-else @click.stop="mark" class="btn unmark-email"><i class="fas fa-envelope-open"></i></button>
            </div>
        </li>     
          `,
  data() {
    return {
      isRead: this.email.isRead,
      isMoveOn: false
    };
  },
  computed:{
    getTime(){
      let currTime = new Date();
      let time = new Date(this.email.sentAt) 
      if(time.getDate() === currTime.getDate() && time.getMonth() === currTime.getMonth()){
        return  `${time.getHours()}:${time.getMinutes()}`
      }
      else return  `${time.getDate()} / ${time.getMonth() + 1}`
    }
  },
  methods: {
    mark() {
      this.isRead = !this.isRead;
      eventBus.$emit("toggleRead", this.email.id);
    },
    goToDetails() {
      eventBus.$emit("selected");
      this.$router.push("/email/" + this.email.id);
    },
    setMove(){
      this.isMoveOn = true
    },
    resetMove(){
      this.isMoveOn = false
    }
  },
};
