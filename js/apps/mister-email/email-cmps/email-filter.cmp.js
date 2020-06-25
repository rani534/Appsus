import { eventBus } from '../email-services/event-bus.service.js';

export default {
    template:`
    <section>
        <select @change="filter">
            <option  value="all">All</option>
            <option  value="read">Read</option>
            <option  value="unRead">Unread</option>
        </select>
    </section>
    `,
    
    methods: {
        filter(ev) {
            eventBus.$emit('filtered', ev.target.value);
        },
      },
}