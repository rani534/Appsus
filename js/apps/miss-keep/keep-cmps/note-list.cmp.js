
import notePreview from './note-preview.cmp.js';

export default{
  props: ["notes"],
  template: `
        <ul>
            <note-preview v-for="note in notes" :note="note" :key="note.id" ></note-preview>
        </ul>
    `,
  components:{
    notePreview
  },
}
