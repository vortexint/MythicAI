import { createApp, warn } from "vue";
import "./styles.css";
import App from "./App.vue";
import YAML from 'yaml'
import { fs } from '@tauri-apps/api'

createApp(App).mount("#app");

// MythicApp has modal, plugin loading; in init.
class MythicApp {

  constructor() {
    this.name = "MythicAI";
    this.pluginsDir = "./plugins/";
    this.plugins = [];
    this.modal = null;
    this.init();
  }

  init() {
    this.loadPlugins();
  } // init

  async loadPlugins() {
  console.log("Loading plugins...");

  await fs.readDir(this.pluginsDir).then((files) => {
    files.forEach( async (file) => {
    await fs.readTextFile(this.pluginsDir + file.name + "/config.yml").then((config) => {
      // parse config.yml
      const configObj = YAML.parse(config);
      // add to this.plugins
      this.plugins.push(configObj);

      // if config.yml has sources: [], load each js file
      if (configObj.sources) {
        configObj.sources.forEach((source) => {
          console.log("Loading", file.name +"/"+ source);
          console.log(this.pluginsDir + file.name + "/" + source)
          import(this.pluginsDir + file.name + "/" + source).then((module) => {
            console.log("Loaded", file.name +"/"+ source);
          }).catch((err) => {
            console.error(err);
          })
        })
      }
      else {
        console.warn( "%c" + this.name + "%c - " + file.name +
                      "/config.yml%c - has no sources\n" +
                      "ⓘ If you are developing this Plugin, add at least one JS source to config.yml",
                      "color: Cyan","", "color: #fff");
      }
    }).catch((err) => {
      console.log("No config.yml found for", file.name);
    })

    })
  })
  } // loadPlugins

} // MythicApp

const app = new MythicApp();
setTimeout(() => {
  console.log(app.plugins);
}, 1000);