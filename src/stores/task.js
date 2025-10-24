import { getAllTasks } from "@/http/task-api";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useTaskStore = defineStore("TaskStore", () => {
  const tasks = ref([]);

  const fetchTasks = async () => {
    const { data } = await getAllTasks();
    tasks.value = data.data;
  };

  const unCompleted = computed(() =>
    tasks.value.filter((item) => !item.is_completed)
  );

  const completed = computed(() =>
    tasks.value.filter((item) => item.is_completed)
  );

  const handleAddTask = async (task) => {
    console.log(task);

    // const { data } = await addNewTask(task);
    // unCompleted.value.unshift(data.data);
  };

  return { tasks, fetchTasks, completed, unCompleted, handleAddTask };
});
