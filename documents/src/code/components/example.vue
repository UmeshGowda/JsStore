<template>
<div>
<v-layout row wrap>
 <v-flex id="divDbInfo" xs12 sm8 md2 offset-sm-2 class="hidden-xs-and-down margin-top-50px">
            <table>
                <caption>Current Database</caption>
                <thead>
                    <tr>
                        <th>Table</th>
                        <th>Records</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="info in dbInfo" :key="info.name">
                        <td>{{info.name}}</td>
                        <td>{{info.count}}</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="2">
                            <a class="margin-top-20px btn primary" href="#">Restore Db</a>
                        </td>
                    </tr>
                </tfoot>
            </table>
    </v-flex>
    <v-flex id="divExampleCode" xs12 sm12 md7 l8 xl6 class="margin-left-15px">
     <div>
        <div class="content-heading">JsStore Code</div>
        <div id="divCode">
            <div v-html="exampleHtml" class="margin-top-20px"></div>
        </div>
    </div>
    <p>
        <span>
            You can also edit code and run it.
        </span>
        <button disabled id="btnExecute" class="btn waves-effect right-align">Run
            <i class="material-icons">&#xE037;</i>
        </button>
    </p>
    <div>
        <div class="margin-top-30px">
            <span class="content-heading">Result :</span>
            <span id="recordCount" style="padding-top:10px;" class="hidden right">No of Records : </span>
        </div>
        <p id='timeTakenContainer' class="right-align hidden">
            Time Taken :
            <span id='timeCount'></span> sec.
        </p>
        <div v-html="resultInnerHtml" id="divResult" contenteditable>

        </div>
    </div>
    </v-flex>
</v-layout>
<v-layout row justify-center>
    <v-dialog v-model="isEditorLoading" persistent max-width="400">
      <v-card>
        <v-card-title class="headline">Loading Editor</v-card-title>
        <v-card-text>
            Please wait - Example page is being configured.
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-layout>
 </div>

</template>
<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import * as axios from "axios";
import { DemoDbService } from "../service/demo_db_service";

@Component({
  props: {
    innerHtml: String,
    pageTitle: String
  }
})
export default class Example extends Vue {
  // props
  innerHtml;
  pageTitle;

  //member
  isEditorLoading = true;
  dbInfo;
  resultInnerHtml="";


  constructor() {
    super();
  }

  mounted() {
    // this.editor = ace.edit("divCode");
    // editor.setTheme("ace/theme/eclipse");
    // editor.session.setMode("ace/mode/javascript");
    JsStore.enableLog();
    var demoServiceInstance = new DemoDbService();
    demoServiceInstance
      .createDemoDataBase()
      .then(dbInfo => {
        this.isEditorLoading = false;
        this.dbInfo = dbInfo;
      })
      .catch(err => {
        console.log(err);
      });

    //console.log(JsStore);//
  }

  head() {
    return {
      title: `Example - ${this.pageTitle}`
    };
  }

  get exampleHtml() {
    return decodeURI(this.innerHtml);
  }
}
</script>
<style>
@import url("~/styles/example.css");
</style>
