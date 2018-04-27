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
    <li v-for="link in linkList" :key="link.text">
        <a href="#">{{link.text}}</a>
    </li>
</ul>
    </v-flex>
    <v-flex id="divTutorialContent" sm12 md9 l7 xl6 class="margin-left-15px">
    <div v-html="tutorialHtml"></div>
    </v-flex>
</v-layout>
</template>
<script lang="ts">
declare var hljs;
import { Component, Vue } from "nuxt-property-decorator";
import * as axios from "axios";
// import "../static/highlight_js/highlight.pack.js";

export interface ITutorialLink {
  text: string;
  url: string;
}
@Component({
  props: {
    innerHtml: String
  }
})
export default class Tutorial extends Vue {
  innerHtml;
  linkList: ITutorialLink[] = [];
  constructor() {
    super();
    // hljs.initHighlightingOnLoad();
    // console.log(hljs);
    this.linkList = this.getLinks();
  }

  mounted() {
    // console.log(this.innerHtml);
    this.loadScript();
  //  hljs.initHighlightingOnLoad()
  }

  get tutorialHtml() {
    return decodeURI(this.innerHtml);
  }

  private loadScript() {
    var tutorialContainer = document.getElementById(
      "divTutorialContent"
    ) as HTMLElement;
    var scripts = (document.getElementById(
      "divTutorialContent"
    ) as HTMLElement).getElementsByTagName("script");

    for (var n = 0, length = scripts.length; n < length; n++) {
      var script = scripts[n];
      var scriptCopy = document.createElement("script");
      scriptCopy.src = script.src;
      tutorialContainer.appendChild(scriptCopy);
      // axios.default
      //   .get(script.src, { crossdomain: true } as any)
      //   .then(response => {
      //     console.log(response.data);
      //   });
      // eval(script.innerHTML); //run script inside div
      console.log(script.src);
    }
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
