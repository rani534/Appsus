import { eventBus } from '../email-services/event-bus.service.js';

export default {
    template: `
    <section class="email-filter">
        <div>       
            <select @change="filter">
                <option  value="all">All</option>
                <option  value="read">Read</option>
                <option  value="unRead">Unread</option>    
            </select>
        </div>
        <div>
            <input placeholder="Search in emails" @input="filterByTxt"/>
        </div>        
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