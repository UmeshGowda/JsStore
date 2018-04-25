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
    <li v-for="link in linkList" :key="link">
        <a href="#">{{link.text}}</a>
    </li>
</ul>
    </v-flex>
    <v-flex id="divTutorialContent" sm12 md9 l7 xl6 class="margin-left-15px">
    
    </v-flex>
</v-layout>
</template>
<script lang="ts">
import Vue from "vue";
export interface ITutorialLink {
  text: string;
  url: string;
}
export default class Tutorial extends Vue {
  linkList: ITutorialLink[] = [];
  constructor() {
    super();
    this.linkList = this.getLinks();
    debugger;
    console.log(this.linkList);
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


<script src="~/assets/scripts/tutorial.js"></script>
<style scoped>
@import url("~/assets/css/tutorial.css");
</style>
