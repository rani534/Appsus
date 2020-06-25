
import keepPreview from '../keep-cmps/keep-preview.cmp.js';

export default{
  props: ["keeps"],
  template: `
        <ul>
            <keep-preview v-for="keep in keeps" :keep="keep" :key="keep.id" ></keep-preview>
        </ul>
    `,
  components:{
    keepPreview
  },
  created(){
      console.log('dd')
  }
}
