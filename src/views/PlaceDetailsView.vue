<script setup>
import { MustSee } from "./roma.json";
import { ref, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
const route=useRoute();
const places=ref(MustSee);
const place=ref();

onBeforeMount(()=>{
    place.value=places.value.find(g=>g.id==route.params.id);
    }
)

</script>
<template>
<div>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-12 card cont">
      <h1>{{place.name}}</h1>
      <img :src="place.picture" :alt="place.name" :title="place.name">
      <p>{{place.desc}}</p>
      <p>Mi ezt az {{place.day}} napon fogjuk megnézni. </p>
      <h2>További hasznos link erről a nevezetésségről:</h2>
      <a :href="place.link" target="_blank">link</a>
    </div>
  </div>

  </div>
</div>
</template>

<style scoped>
h1 {text-align: center; margin-top:12px}
.cont {width: 90%; margin-left: auto; margin-right: auto; margin-top: 24px;
  background-color: rgb(227, 219, 204); box-shadow: rgb(189, 170, 163) 10px 10px 10px;
}
p {text-align: justify; margin:12px 12px 12px 12px;}
h2 {margin-top: 12px; font-size:medium; margin-left: 12px;}
img {width: 100%; height: 100%;}
.rout {text-decoration: none; color: rgb(45, 38, 38); font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif ;}
a {margin-left:24px; margin-bottom: 24px;}
</style>
