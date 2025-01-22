
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
                <img  src="../images/1dayRoute.PNG" alt="first day">
                </button>
            </div>
            <div>
                <h4>Megtekintendő látványosságok:</h4>
                <ol>
                    <li>   <router-link to="placeDetails/6" class="nav-link">Spanyol lépcső</router-link></li>
                    <li>   <router-link to="placeDetails/5" class="nav-link"> Trevi kút  </router-link></li>
                    <li>   <router-link to="placeDetails/7" class="nav-link"> Chiesa di Sant ignazio di loyola templom </router-link></li>
                    <li>   <router-link to="placeDetails/7" class="nav-link"> Hadrianus temploma </router-link></li>
                    <li>   <router-link to="placeDetails/7" class="nav-link"> Pantheon </router-link></li>
                    <li>   <router-link to="placeDetails/9" class="nav-link">   Piazza Navona  </router-link></li>
                    <li>   <router-link to="placeDetails/9" class="nav-link"> Campo Fiori </router-link></li>
                    <li>   <router-link to="placeDetails/8" class="nav-link"> Angyalvár </router-link> </li>
                    <li>   <router-link to="placeDetails/10" class="nav-link"> Piazza del Popolo</router-link> </li>
                    <li>   <router-link to="placeDetails/10" class="nav-link"> Santa Mária in Montesano bazilika </router-link> </li>
                    <li>   <router-link to="placeDetails/10" class="nav-link"> Terazza del Pincio </router-link> </li>
                                                                                            
                </ol>   
            </div>
            <div>
                <h4>Költségek:</h4>
                <table>
                    <tr>
                        <td>Angyalvár</td>
                        <td>13 Euro</td>
                    </tr>
                    <tr>
                        <td>Partheon</td>
                        <td>5 Euro</td>
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
    { status: 'Érkezés a kiindulási pontra A metro vonal spagna megállo', date: '09.00'},
    { status: 'A Spanyol lépcső megtekintése, reggeli', date: '09.30'},
    { status: 'Séta a Trevi kút felé, közben nézelődés, Trevi kút megtekintése', date: '10.00'},
    { status: 'Pantheon megtekintése', date: '11.00'},
    {status: 'Piazza Nova megtekintése', date: '12.00'},
    {status: 'Campo Fiori', date: '13.00'},
    {status: 'Ebéd', date: '13.30'},
    {status: 'Angyalvár', date: '15.30'},
    {status: 'Séta a Poppolo tér felé', date:'16.00'},
    {status: 'Santa Maria bazilika', date:'17.00'},
    {status: 'Érkezés a kiindulási pontra', date: '18.00'},
    {status: 'Megérkezés a szállásra, vacsora', date:'19.00'}
]);
const small=ref(true);
function enlarge() {
    if (small.value==true) {small.value=false;} 
   else {small.value=true;} }

</script>
<style scoped>
h1 {margin-top:24px; margin-bottom: 24px; text-align: center;}
.contentcont {display: flex; flex-direction: row; align-items: flex-start; justify-content: space-between; flex-wrap: wrap;}
.timecont1 {margin-left: 12px; margin-right: 12px; flex: 2;}
.timecont2 {margin-left: 12px; 
    margin-right:12px; margin-top: 24px; padding-bottom: 120px; 
    flex:7; display: flex; flex-direction: column; width: 100%;  }
.mapVatikan :hover {cursor:zoom-in;}
.enlargeVatikan {transform: scale(2) ; 
    position:absolute; top: 300px; left:30%; }
.enlargeVatikan :hover {cursor:zoom-out;}
button :hover {cursor:zoom-in;}
img {max-width:500px; width:100%;}
li {color: black; text-decoration: none;}
h4 {margin-left:12px; margin-top:24px; margin-bottom: 12px;}
table {margin-bottom: 22px;}

</style>