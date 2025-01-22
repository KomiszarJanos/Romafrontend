<script setup>
import { RouterLink, RouterView } from 'vue-router'
import MenuBarVue from './components/MenuBar.vue'
import Foot from './components/Foot.vue';
</script>

<template>
  
  <header>
    <MenuBarVue></MenuBarVue>
  </header>
  <div class="container-fluid imgcont">
    <RouterView />
  </div>
  <footer>
    <Foot></Foot>
  </footer>

</template>

<style scoped>
header {
   width: 100%;
}
.imgcont {
  min-height: 500px;
  padding-bottom: 18px;
  background-image: linear-gradient(to bottom right, rgb(212, 212, 206), rgb(248, 241, 144));
 }



</style>
