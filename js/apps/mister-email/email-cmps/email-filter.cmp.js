import { eventBus } from '../email-services/event-bus.service.js';

export default {
    template: `
    <section class="email-filter">     
     <i class="fas fa-search"></i>
        <input placeholder="Search email..." @input="filterByTxt"/>  
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
        filterByTxt(ev) {
            eventBus.$emit('filtered', ev.target.value)
        }
    },
}