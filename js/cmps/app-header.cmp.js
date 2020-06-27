export default {
    template: `
    <header class="app-header flex align-center space-between">
      <h1 class="app-logo">Appsus <i class="fas fa-hat-cowboy-side"></i> </h1>
      <nav class=" flex space-between"> 
      <component v-if="currInputComponent" :is="currInputComponent" ></component>        
       <router-link to="/"> <i class="fas fa-home"></i> </router-link> 
       <router-link to="/book"> <i class="fas fa-book-open"></i> </router-link> 
       <router-link to="/keep"> <i class="fas fa-sticky-note"></i></i> </router-link> 
       <router-link to="/email"> <i class="fas fa-at"></i> </router-link> 
      </nav>
    </header>
    `,
    data(){
      return {
        currInputComponent: null
      }
    },  
}
