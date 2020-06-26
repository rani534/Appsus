export default {
    props:['note'],
    template: `
   <section class="note-video" >
        <iframe :src="url"></iframe>
        <textarea ref="textarea" v-if="isOnEdit" @blur="setUrl"></textarea>
    </section>
    `
    ,
    data(){
        return{
            url:this.note.info.url
        }
    },
    computed:{
        isOnEdit(){
            return this.note.isOnEdit
        }
    },
    methods:{
        setUrl(){
            this.note.info.url = this.url 
        }
    },
    created(){
        this.$refs.textarea.focus()       
    }
}