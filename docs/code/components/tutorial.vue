<template>
<v-layout>
    <v-flex md2 class="hidden-sm-and-down" id="divMenuContainer">
<ul>
     <li class="search margin-bottom-10px">
       <v-card class="search-wrapper">
         <v-card-text>
            <input id="txtSearch" type="text" placeholder="Search">
            <i class="material-icons">search</i>
            <div class="search-results"></div>
         </v-card-text>
       </v-card>
       
    </li>
    <li v-for="link in linkList" :key="link.text" v-bind:class="{'link-active': link.url=== activeUrl}">
        <a :href="link.url">{{link.text}}</a>
    </li>
</ul>
    </v-flex>
    <v-flex id="divTutorialContent" sm12 md9 l7 xl6 class="margin-left-15px">
    <div v-html="tutorialHtml" class="margin-top-20px"></div>
    </v-flex>
</v-layout>
</template>
<script lang="ts">
declare var hljs;
import { Component, Vue } from "nuxt-property-decorator";
import * as axios from "axios";

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
  activeUrl = "";
  constructor() {
    super();
    this.linkList = this.getLinks();
    this.activeUrl = this.linkList[0].url;
  }

  get tutorialHtml() {
    return decodeURI(this.innerHtml);
  }

  getLinks() {
    return [
      {
        text: "Get Started",
        url: "get_started"
      },
      {
        text: "Installation",
        url: "installation"
      },
      {
        text: "Create Table",
        url: "create_table"
      },
      {
        text: "Create Database",
        url: "create_database"
      },
      {
        text: "insert",
        url: "insert"
      },
      {
        text: "Bulk Insert",
        url: "bulk_insert"
      },
      {
        text: "Select",
        url: "select"
      },
      {
        text: "Where",
        url: "where"
      },
      {
        text: "Ignore Case",
        url: "ignore_case"
      },
      {
        text: "Or",
        url: "or"
      },
      {
        text: "Limit",
        url: "limit"
      },
      {
        text: "Skip",
        url: "skip"
      },
      {
        text: "Order By",
        url: "order_by"
      },
      {
        text: "Aggregate",
        url: "aggregate"
      },
      {
        text: "Group By",
        url: "group_by"
      },
      {
        text: "Distinct",
        url: "distinct"
      }
    ] as ITutorialLink[];
  }
}
</script>
<style scoped>
@import url("~/assets/css/tutorial.css");
</style>
