<template>
  <div id="myMap"></div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import {Loader, google /* Import the interfaces */} from "google-maps";
import {statesData} from "@/assets/ve-states";
import {globalData} from "@/store/globalData"

@Component
export default class MapComponent extends Vue {
  private googleMap!:google;
  private map!: google.maps.Map;
  private markers: google.maps.Marker[] = [];

  mounted() : void {
    this.loadGoogle();
  }

  pushMarked (feature:google.maps.Data.Feature) :void {
    const pos = feature.getProperty("Center");
    const state = feature.getProperty("ESTADO");
    this.markers.push(new this.googleMap.maps.Marker({
      position: {lat: pos[1], lng: pos[0]},
      label: state.charAt(0),
      map: this.map,
      title: state
    }));
    /*
    this.markers[this.markers.length - 1].addListener("click", () => {
    })
    */
  }

  async loadGoogle() : Promise<void>
  {
    const strokeWeigth = 0.5;
    // Load google map and set the options
    this.googleMap = await new Loader("AIzaSyB992nEm-b5222KCwQQ0hrq4tkFkpLvG68").load();
    this.map = new this.googleMap.maps.Map(document.getElementById("myMap") as HTMLElement, {
      center: {lat: 6.61957, lng: -65.801997},
      zoom: 5,
      minZoom: 5,
    });

    // Load the geojson
    this.map.data.addGeoJson(statesData);

    this.map.data.forEach(this.pushMarked);

    // Set the style
    this.map.data.setStyle(function(feature:google.maps.Data.Feature):google.maps.Data.StyleOptions{
      //console.log(feture.getProperty("ESTADO"), feture.getProperty("Center"));
      return {
        fillColor: "#ff0000",
        strokeWeight: strokeWeigth
      };
    });
    
    // Handle events
    this.map.data.addListener("mouseover", (event:any) => {
      this.map.data.overrideStyle(event.feature, {strokeWeight: 2});
      globalData.hoveredState = event.feature.getProperty("ESTADO");
    });

    this.map.data.addListener("click", (event:any) => {
      globalData.selectedState = event.feature.getProperty("ESTADO");
    });


    this.map.data.addListener("mouseout", (event:any) => {
      this.map.data.overrideStyle(event.feature, {strokeWeight: strokeWeigth});
    });
  }
}
</script>

<style scoped>
#myMap {
  width: 100%;
  height: 500px;
}
</style>
