<script setup>

</script>

<template>
  <main>
    <div class="container-fluid heightview">
      <div class="row">
        <h1>Római vakáció 3 napra</h1>
      </div>
      <div class="row">
        <p>Terveim szerint római vakációnk 3 éjszakából fog állni. Ez tünik megfizethetőnek és elegendőnek. 
          Lehetőség szerint ezért úgy kellene keresni repülőt, hogy az első napra maradjon egy fél napunk. A második és harmadik nap teljes napot igényel.
          Körülbelül így lehetne besűríteni Rómát, ami persze lehetetlenség. A haza utazás napja bónusz lenne, amikor is még megnézhetünk valamit. No de nézzük a napokat.
        </p>
      </div>
        <div class="row">
          <div class="col-sm-12 col-md-6 col-lg-3 planstyle" >
            <RouterLink to="/firstday">
            <div class="piccont">
            <img class="img-fluid rounded" src="https://utazas-nyaralas.info/roma/roma-olaszorszag-latnivalok-1000.jpg" alt="trevikút"
            title="trevikút">
            <h2>1.nap</h2>
            </div>
          </RouterLink>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-3 planstyle" >
            <RouterLink to="/secondday">
            <div class="piccont">
            <img class="img-fluid rounded" src="https://utazas-nyaralas.info/roma/szent-peter-bazilika-5-1000.jpg" alt="szentPéterBazilika"
            title="szentPéterBazilika">
            <h2>2.nap</h2>
            </div>
          </RouterLink>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-3 planstyle" >
            <RouterLink to="/thirdday">
            <div class="piccont">
            <img class="img-fluid rounded" src="https://utazas-nyaralas.info/roma/colosseum-roma-2-1000.jpg" alt="colosseum"
            title="colosseum">
            <h2>3.nap</h2>
            </div>
          </RouterLink>
          </div>
          <div class="col-sm-12 col-md-6 col-lg-3" >
            <RouterLink to="/FourtDay">
            <div class="piccont">
            <img class="img-fluid rounded" src="https://utazas-nyaralas.info/roma/santa-maria-maggiore-bazilika-1000.jpg" alt="santaMeggorio"
            title="santaMaggerori">
            <h2>Hazaút</h2>
            </div>
          </RouterLink>
          </div>

        </div>

          
    
    </div>
    

  </main>
</template>
<style scoped >
.heightview {min-height: 100vh;}
.cont { margin-left: 12px;}
.piccont {position: relative; padding:0; }
img { box-shadow: rgb(73, 69, 69) 10px 10px; margin-top: 22px;}
h2 { position:absolute; right:35%; top:40%; z-index: 200; font-size: 40px; color: aqua;
}
p {text-align: justify;}
h1 {margin-top: 22px; margin-bottom: 22px; text-align: center;}
.planstyle:hover {animation-name: ring; animation-duration: 0.1s; animation-iteration-count: 4;}
@keyframes ring {
  from {transform: rotate(5deg);}
  to {transform: rotate(0deg);}
};


</style>