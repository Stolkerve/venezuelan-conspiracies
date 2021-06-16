<template>
  <div id="app">
    <HeaderComponentent/>
    <div class = "main-conteiner">
      <div class = "map-conteiner">
        <div class = "state-conteiner">
          Hovered state: {{getHoveredState()}}
        </div>
        <MapComponent/>
      </div>
      <div class = "conspiracies-conteiner">
        <ConspiraciesComponent/>
      </div>
    </div>
    <FooterComponent/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MapComponent from '@/components/MapComponent.vue';
import ConspiraciesComponent from "@/components/ConspiraciesComponent.vue"
import HeaderComponentent from "@/components/HeaderComponent.vue"
import FooterComponent from "@/components/FooterComponent.vue"
import {globalData} from "@/store/globalData"

@Component({
  components: {
    MapComponent,
    ConspiraciesComponent,
    HeaderComponentent,
    FooterComponent
  },
})
export default class App extends Vue {
  getHoveredState(): string {
    return globalData.hoveredState;
  }

  getSelectedState(): string{
    return globalData.selectedState;
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
}

.main-conteiner{
  display: table;
  width: 100%;
  padding: 0;
  margin: 0;
}

.map-conteiner {
  display: table-cell;
  width: 50%;

  border: 2px solid black;
  border-bottom-width: 0px;
  border-top-width: 0px;
  border-right-width: 1px;
}

.conspiracies-conteiner {
  display: table-cell;
  border-right: 2px solid black;
  border-left: 1px solid black;
}

.state-conteiner {
  border: 2px solid black;
  border-top-width: 0px;
  border-right-width: 0px;
  border-left-width: 0px;
  padding: 10px;
  padding-right: 0px;
  font-size: 20px;
  background-color: aquamarine;
}


</style>
