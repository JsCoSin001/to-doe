<script setup lang="ts">
import Tasks from "../components/tasks/Tasks.vue";
</script>

<template>
  <main style="min-height: 50vh; margin-top: 2rem">
    <div class="container">
      <div class="row">
        <div class="col-md-8 offset-md-2">
          <!-- Add new Task -->
          <div class="relative">
            <input
              type="text"
              class="form-control form-control-lg padding-right-lg"
              placeholder="+ Add new task. Press enter to save."
            />
          </div>
          <!-- List of tasks -->
          <Tasks />
        </div>
      </div>
    </div>
  </main>
</template>
