export default {
    template: `
    <header class="app-header flex align-center space-between">
      <h1>app sus</h1>
      <nav class=" flex space-between"> 
      <component v-if="currInputComponent" :is="currInputComponent" ></component>        
       <router-link to="/about"> About </router-link> 
       <router-link to="/"> Home Page </router-link> 
       <router-link to="/book"> book App </router-link> 
       <router-link to="/keep"> Miss keep </router-link> 
       <router-link @click.native="consol" to="/email"> mister email </router-link> 
      </nav>
    </header>
    `,
    data(){
      return {
        currInputComponent: null
      }
    },
    methods:{

      consol(){
        console.log('clicked')
      }
    }
    

}
