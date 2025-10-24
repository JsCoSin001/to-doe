<script setup lang="ts">
import Task from "./Task.vue";

const props = defineProps({
  tasks: Array,
});
</script>

<template>
  <div class="card mt-2">
    <Task v-for="task in tasks" :key="task.id" :task="task" />
  </div>
</template>
