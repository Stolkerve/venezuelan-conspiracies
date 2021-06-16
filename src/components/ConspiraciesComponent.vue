<template>
  <div>
    <span style="font-weight: bold">{{getSelectedStateTitle()}}</span>
    <br/>
    <br/>
    {{getSelectedStateBody()}}
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import faker from "faker";
import { HashMap, conspiracy } from '@/models/interfaces';
import { globalData } from '@/store/globalData'

@Component
export default class ConspiraciesComponent extends Vue {
  private conspireciesList:HashMap<conspiracy[]> = {};
  readonly listOfStates = [
    "Amazonas",
    "Anzoategui",
    "Apure",
    "Aragua",
    "Barinas",
    "Bolivar",
    "Carabobo",
    "Cojedes",
    "Delta Amacuro",
    "Distrito Capital",
    "Falcon",
    "Guarico",
    "Lara",
    "Merida",
    "Miranda",
    "Monagas",
    "Nueva Esparta",
    "Portuguesa",
    "Sucre",
    "Tachira",
    "Trujillo",
    "Vargas",
    "Yaracuy",
    "Zulia",
    "Zona en Reclamacion"
  ];

  beforeMount() {
    this.conspireciesList[""] = [{title: "", body:""}];
    for (let i = 0; i < this.listOfStates.length; i++) {
      this.conspireciesList[this.listOfStates[i]] = [{
        title: faker.name.title(),
        body: faker.lorem.paragraph()
      }]
    }
  }

  getSelectedState(): string{
    return globalData.selectedState;
  }

  getSelectedStateTitle(): string{
    return this.conspireciesList[this.getSelectedState()][0].title;
  }

  getSelectedStateBody(): string{
    return this.conspireciesList[this.getSelectedState()][0].body;
  }
}
</script>

<style scoped>

div{
  inline-size: 100%;
  overflow-wrap: break-word;
  padding: 0px;
  margin: 0px;
}
</style>