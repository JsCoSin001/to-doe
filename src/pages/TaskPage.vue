<script setup>
import NewTask from "@/components/tasks/NewTask.vue";
import { useTaskStore } from "@/stores/task";
import { storeToRefs } from "pinia";
import { onMounted } from "vue";
import Tasks from "../components/tasks/Tasks.vue";

const store = useTaskStore();

const { completed, unCompleted } = storeToRefs(store);
const { handleAddTask } = store;

onMounted(async () => {
  await store.fetchTasks();
});
</script>

<template>
  <main style="min-height: 50vh; margin-top: 2rem">
    <div class="container">
      <div class="row">
        <div class="col-md-8 offset-md-2">
          <!-- Add new Task -->
          <NewTask @addTask="handleAddTask" />
          <!-- List of tasks -->
          <Tasks :tasks="unCompleted" />
          <div class="text-center">
            <button class="btn btn-primary mt-4 mb-4">Show</button>
          </div>
          <Tasks :tasks="completed" />
        </div>
      </div>
    </div>
  </main>
</template>
