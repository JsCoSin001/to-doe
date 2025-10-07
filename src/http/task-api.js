import api from "./api";

const resource = "tasks";

export const getAllTasks = () => api.get(resource);
export const updateTask = (id, task) => api.patch(`${resource}/${id}`, task);
export const removeTask = (id) => api.delete(`${resource}/${id}`);
export const completedTask = (id, task) =>
  api.patch(`${resource}/${id}/completed`, task);
