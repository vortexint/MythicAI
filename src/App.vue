<script setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

import { name, version } from "../package.json";
import { ref, onMounted } from 'vue';

const menuCollapsed = ref(false);

function handleKeyDown(event) {
  if (event.code === 'Escape') {
    menuCollapsed.value = !menuCollapsed.value;
    console.log("toggle menu")
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown);
});

</script>

<template>
  <div class="App">
    <div class="fake-window-titlebar">
        <div class="titlebar-buttons left">
          <button>
            <span class="material-symbols-outlined">close</span>
          </button>
          <button>
            <span class="material-symbols-outlined">expand_less</span>
          </button>
          <button>
            <span class="material-symbols-outlined">expand_more</span>
          </button>
        </div>
        <div data-tauri-drag-region class="titlebar-title">
          <span>MythicAI</span>
        </div>
      </div>

      <div :class="{ 'side-menu': true, 'collapsed': menuCollapsed }">
        <div class="side-menu-content">
          <h2><img class="logo" src="/mythicai-transparent.png" alt="MythicAI" />alpha <sub>v{{ version }}</sub></h2>
          <hr />
          <div class="button-container">
            <button><span class="material-symbols-outlined">add</span> New Project</button>
            <button><span class="material-symbols-outlined">history</span> Open Project</button>
            <button><span class="material-symbols-outlined">extension</span> Plugins</button>
            <button><span class="material-symbols-outlined">settings</span> Settings</button>
          </div>
          <hr />
          <p>
            <!-- packagejson name + version from import -->
            <sub>{{ name }} v{{ version }}</sub>
          </p>
        </div>
      </div>
      
      <div class="workspace">
        <div class="titlebar-wrapper">
          <button class="side-menu-toggle">
            <span class="material-symbols-outlined">left_panel_close</span>
          </button>
          <button class="side-menu-toggle">
            <span class="material-symbols-outlined">info</span>
          </button>
          <div class="separator" />
          <div class="titlebar">
            <span>title</span>
          </div>
          <div class="separator" />
        </div>
        <div class="workspace-content">
          content
        </div>
      </div>
    </div>
</template>
