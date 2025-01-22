<script setup>
import { MustSee } from "./roma.json";
import { ref, onMounted } from "vue";

import axios from "axios";

const Places=ref();

onMounted(()=>{
  axios.get('http://localhost:3000/api/roma/').then(resp=>{Places.value=resp.data.romas;})
  })

</script>
<template>
<div>
  <div class="container-fluid">
    <div class="row">
      <h1>Róma kihagyhatatlan látnivalói</h1>
      <p>részleteket a képekre kattintva tudod megtekinteni.</p>
    </div>
    <div class="row justify-content-center align-items-flex g-0 ">
      <div v-for="p in Places" :key="p.id" class="col-sm-12 col-md-6 col-lg-4 align-items-stretch d-flex my-2 ">
          <div class="card align-items-center p-3 m-3 cardown">
            <RouterLink class="rout" :to="{name:'placeDetails', params: {id:p.id}}">
            <div class="card-body">
            <h2 class="card-title text-center text-wrap w-100">{{ p.name }}</h2>
            <img class="rounded" :src="p.picture" :alt="p.name" :title="p.name">
          </div>
          </RouterLink>
          </div>
      </div>  
    </div>

  </div>
</div>
</template>

<style scoped>
h2, h1, p {text-align: center;}
h1 {margin-top: 12px;}
img {width: 100%; height: 100%;}
.cardown {background-color: orange; box-shadow: orangered 10px 10px 10px;}
.rout {text-decoration: none; color: rgb(45, 38, 38); font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif ;}
</style>
