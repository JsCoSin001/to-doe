<template>
  <div class="relative">
    <input
      type="text"
      class="form-control form-control-lg padding-right-lg"
      placeholder="+ Add new task. Press enter to save."
      v-model="newTask"
      @keydown.enter="emit('addTask', newTask)"
    />
  </div>
</template>

<script setup>
import { ref } from "vue";

const newTask = ref("");

const emit = defineEmits(["addTask"]);
</script>
