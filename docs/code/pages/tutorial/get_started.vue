<template>
<Tutorial v-bind:innerHtml="tutorialContent"></Tutorial>
</template>
<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import Tutorial from "../../layouts/tutorial.vue";
@Component({
  components: {
    Tutorial
  }
})
export default class extends Vue {
  tutorialContent = "<p>fuckoff</p>";
  mounted() {
    console.log("hiss");
  }
}
</script>
