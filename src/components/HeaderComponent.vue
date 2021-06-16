<template>
  <div class = "header">
    Map of<br/>Venezuelan Conspiracies
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";

@Component()
export default class HeaderComponentent extends Vue {

}

</script>

<style scoped>
.header {
  background-color: tomato;
  border: 2px solid black;
  text-align: center;
  padding-bottom: 20px;
  padding-top: 20px;
  font-size: 35px;
  font-weight: bold;
}

</style>
