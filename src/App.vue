<script setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

import { name, version } from "../package.json";

import logo from "./assets/mythicai.png";
import logoTransparent from "./assets/mythicai-transparent.png";

</script>

<template>
  <div className="App">
    <div className="fake-window-titlebar">
        <div className="titlebar-buttons left">
          <button>
            <span className="material-symbols-outlined">close</span>
          </button>
          <button>
            <span className="material-symbols-outlined">expand_less</span>
          </button>
          <button>
            <span className="material-symbols-outlined">expand_more</span>
          </button>
        </div>
        <div data-tauri-drag-region className="titlebar-title">
          <span>MythicAI</span>
        </div>
      </div>

      <div className="side-menu">
        <div className="side-menu-content">
          <h2><img className="logo" src={{logoTransparent}} alt="MythicAI" />alpha <sub>v{{ version }}</sub></h2>
          <hr />
          <div className="button-container">
            <button><span className="material-symbols-outlined">add</span> New Project</button>
            <button><span className="material-symbols-outlined">history</span> Open Project</button>
            <button><span className="material-symbols-outlined">extension</span> Plugins</button>
            <button><span className="material-symbols-outlined">settings</span> Settings</button>
          </div>
          <hr />
          <p>
            <!-- packagejson name + version from import -->
            <sub>{{ name }} v{{ version }}</sub>
          </p>
        </div>
      </div>
      
      <div className="workspace">
        <div className="titlebar-wrapper">
          <button className="side-menu-toggle">
            <span className="material-symbols-outlined">left_panel_close</span>
          </button>
          <button className="side-menu-toggle">
            <span className="material-symbols-outlined">info</span>
          </button>
          <div className="separator" />
          <div className="titlebar">
            <span>title</span>
          </div>
          <div className="separator" />
        </div>
        <div className="workspace-content">
          content
        </div>
      </div>
    </div>
</template>
