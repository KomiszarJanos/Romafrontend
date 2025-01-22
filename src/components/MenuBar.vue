<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>

<template>
  <nav class="navbar navbar-expand-lg navbarstyle" >
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"      aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <RouterLink class="nav-link" to="/"><img class="imgstyle" src="../images/MaterialSymbolsLightHome.svg" alt="home"></RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link" to="/mustsee">Róma Látnivalók</RouterLink>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="https://sp.booking.com/searchresults.html?aid=2242406;checkin=2024-10-08;checkout=2024-10-11;iata_orr=1;iata=ROM;group_adults=1;lang=hu" target="_blank" > Szállások</a>
     </li>
     <li class="nav-item">
      <a class="nav-link" href="https://www.esky.hu/flights/search/ap/BUD/mp/ROM?departureDate=2024-10-21&returnDate=2024-10-24&pa=1&py=0&pc=0&pi=0&sc=economy"
      target="_blank" >Repjegy</a>
   </li>
      <li class="nav-item bakli" @click="$router.go(-1)"> 
        <img src="../images/MaterialSymbolsArrowBack2.svg" alt="back">  
        </li>
     </ul>
     
  </div>
  </nav>
</template>

<style scoped>
.bakli {margin-top: 2px; margin-left: 6px; font-size:24px;}
.bakli :hover {cursor:pointer;}
img {width: 24px; }
.router-link-active {text-shadow: black 1px 1px; text-decoration: underline;}
.navbarstyle {background-image:
  linear-gradient(to right bottom, rgb(178, 207, 109) 30%, rgb(85, 84, 66));}
  
  
 </style>
