<template>
    <div class="modal">
      <div class="modal-content">
        <div class="modal-header">
          <h2>{{ title }}</h2>
          <button @click="$emit('close')">X</button>
        </div>
        <div class="modal-body">
          <slot></slot>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Modal",
    props: {
      title: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  