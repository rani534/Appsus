import emailFilter from '../email-cmps/email-filter.cmp.js'
import emailSearch from '../email-cmps/email-search.cmp.js'




export default {
    template:`
    <section class="email-header">
        
        <email-filter></email-filter>  
    </section>
    
    `,
    components:{
        emailFilter,
        emailSearch
    }
}