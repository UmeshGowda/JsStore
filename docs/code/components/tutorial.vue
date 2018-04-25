<template>
<v-layout>
    <v-flex l2 class="hidden-md-and-down">
<ul>
     <li class="search">
                                <div class="search-wrapper card">
                                    <input id="txtSearch" type="text" placeholder="Search">
                                    <i class="material-icons">search</i>
                                    <div class="search-results"></div>
                                </div>
    </li>
    <li v-for="link in $data.linkList" :key="link">
        <a href="#">{{link.text}}</a>
    </li>
</ul>
    </v-flex>
    <v-flex id="divTutorialContent" sm12 md9 l7 xl6 class="margin-left-15px">
        {{$data.name}} assass
    </v-flex>
</v-layout>
</template>
<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
export interface ITutorialLink {
  text: string;
  url: string;
}
@Component({})
export default class Tutorial extends Vue {
  linkList: ITutorialLink[] = [];
  name = "fuck";
  constructor() {
    super();
    this.linkList = this.getLinks();
  }

  mounted() {
    console.log("hi");
  }

  getLinks() {
    return [
      {
        text: "Get Started",
        url: "tutorial"
      }
    ] as ITutorialLink[];
  }
}
</script>
<style scoped>
@import url("~/assets/css/tutorial.css");
</style>
