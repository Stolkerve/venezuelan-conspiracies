<template>
  <div class = "Footer">
    Footer
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";

@Component()
export default class FooterComponentent extends Vue {

}
</script>

<style scoped>
.Footer {
  background-color: tomato;
  border: 2px solid black;
  padding-bottom: 20px;
  padding-top: 20px;
  font-size: 18px;
}
</style>