
<template>
    <div class="container-fluid">
        <div class="row">
            <h1>Napi program</h1>
        </div>
    <div class="contentcont">
        <div class="timecont1 d-none d-md-block" >
        <Timeline :value="events">
            <template #opposite="slotProps">
                <small class="text-surface-500 dark:text-surface-400">{{slotProps.item.date}}</small>
            </template>
            <template #content="slotProps">
                {{slotProps.item.status}}
            </template>
        </Timeline>
        </div>
        <div class="timecont2">
            <div :class="{mapVatikan :small, enlargeVatikan :!small }" >
                <button @click="enlarge"> 
                <img  src="../images/2dayRoute.PNG" alt="2 day">
                </button>
            </div>
            <div>
                <h4>Megtekintendő látványosságok:</h4>
                <ol>
                    <router-link to="placeDetails/1" class="nav-link"><li>👁‍🗨 Szent Péter Bazilika</li></router-link>
                    <router-link to="placeDetails/2" class="nav-link"><li>👁‍🗨 Vatikáni Múzeum </li></router-link>
                </ol>    
            </div>
            <div>
                <h4>Költségek:</h4>
                <table>
                    <tr>
                        <td>Vatikán múzeum</td>
                        <td>20 Euro</td>
                    </tr>
                    <tr>
                        <td>Kathedráliskupola</td>
                        <td>10 Euro</td>
                    </tr>
                </table>
            </div>
        </div>
     </div>
    </div>
    
</template>

<script setup>
import { ref } from "vue";
import Timeline from 'primevue/timeline';


const events = ref([
    { status: 'A szállás elhagyása', date: '08.00'},
    { status: 'Érkezés a kiindulási pontra A metro vonal ottaviano megállo', date: '09.00'},
    { status: 'Jegyek megvétele Szent Péter tér', date: '10.00'},
    { status: 'Szent-Péter Bazilika', date: '11.00'},
    { status: 'Szent-péter Bazilika kupola', date: '11.30'},
    {status: 'Vatikáni múzeum', date: '12.00'},
    {status: 'Séta a vatikánban', date: '15.00'},
    {status: 'Ebéd', date: '15.30'},
    {status: 'Érkezés a kiindulási pontra', date: '16.00'},
    {status: 'Megérkezés a szállásra, vacsora', date:'17.00'}
]);
const small=ref(true);
function enlarge() {
    if (small.value==true) {small.value=false;} 
    else {small.value=true;}
    console.log(small.value); }

</script>
<style scoped>
h1 {margin-top:24px; margin-bottom: 24px; text-align: center;}
.contentcont {display: flex; flex-direction: row; align-items: flex-start; justify-content: space-between; flex-wrap: wrap;}
.timecont1 {margin-left: 12px; margin-right: 12px; flex: 2;}
.timecont2 {margin-left: 12px; margin-right:12px; margin-top: 24px; flex:7; display: flex; flex-direction: column;}
.mapVatikan :hover {cursor:zoom-in;}
.enlargeVatikan {transform: scale(2);
    position:absolute; top: 300px; left:30%; }
.enlargeVatikan :hover {cursor:zoom-out;}
img {max-width:500px; width:100%;}
button :hover {cursor:zoom-in;}
.eyeinner {font-weight: 500;}
.linktext {color: black; text-decoration: none;}
li {color: black; text-decoration: none;}
h4 {margin-left:12px; margin-top:24px; margin-bottom: 12px;}
table {margin-bottom: 22px;}
</style>