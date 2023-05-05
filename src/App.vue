<script setup>
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

import { name, version } from "../package.json";
import { ref, onMounted } from 'vue';
import { appWindow } from '@tauri-apps/api/window';

import Modal from './Modal.vue';

const menuCollapsed = ref(false);
const titlebarButtonsPos = ref('left');

function toggleMenu() {menuCollapsed.value = !menuCollapsed.value;}
function closeApp() {appWindow.close();}
function minimizeApp() {appWindow.minimize();}

async function handleMaximize() {
  const isMaximized = await appWindow.isMaximized();
  if (isMaximized) {appWindow.unmaximize();}
  else {appWindow.maximize();}
}

function handleKeyDown(event) {
  if (event.code === 'Escape') {toggleMenu()}
  if (event.code === 'F11') {handleMaximize()}
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown);
});

</script>

<!-- App -->
<template>
  <div class="App">
    <div class="fake-window-titlebar">
        <div class="titlebar-buttons {{ titlebarButtonsPos }}">
          <button @click="closeApp">
            <span class="material-symbols-outlined">close</span>
          </button>
          <button @click="handleMaximize">
            <span class="material-symbols-outlined">expand_less</span>
          </button>
          <button @click="minimizeApp">
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
            <br />© {{ new Date().getFullYear() }} <a target="_blank" rel="noopener noreferrer" href="https://vortex-dev.com">Vortex Interactive</a>
          </p>
        </div>
      </div>
      
      <div class="workspace">
        <div class="titlebar-wrapper">
          <button @click="toggleMenu" class="side-menu-toggle">
            <span class="material-symbols-outlined">{{ menuCollapsed ? 'left_panel_open' : 'left_panel_close' }}</span>
          </button>
          <div class="separator" />
          <div class="titlebar">
            <span>title</span>
          </div>
          <div class="separator" />
          <button class="side-menu-toggle">
            <span class="material-symbols-outlined">info</span>
          </button>
        </div>
        <div class="workspace-content">
          content
        </div>
      </div>
    </div>
</template>
