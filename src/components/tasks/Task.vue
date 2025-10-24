<script setup lang="ts">
import IconEdit from "../icons/IconEdit.vue";
import IconTrash from "../icons/IconTrash.vue";

const props = defineProps({
  task: Object,
});
</script>

<template>
  <ul class="list-group list-group-flush">
    <li class="list-group-item py-3">
      <div class="d-flex justify-content-start align-items-center">
        <input
          class="form-check-input mt-0 completed"
          type="checkbox"
          :checked="task.is_completed"
        />
        <div
          class="ms-2 flex-grow-1"
          title="Double click the text to edit or remove"
        >
          <!-- <div class="relative">
                                            <input class="editable-task" type="text" />
                                        </div> -->
          <span :class="task.is_completed ? 'completed' : ''">{{
            task.name
          }}</span>
        </div>
        <div class="task-date">24 Feb 12:00</div>
      </div>
      <div class="task-actions">
        <button class="btn btn-sm btn-circle btn-outline-secondary me-1">
          <IconEdit />
        </button>
        <button class="btn btn-sm btn-circle btn-outline-danger">
          <IconTrash />
        </button>
      </div>
    </li>
  </ul>
</template>
