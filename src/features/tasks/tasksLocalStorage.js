const localStorageKey = "tasks";

export const saveTasksInLocalStorage = tasks =>
  localStorage.setItem(localStorageKey, JSON.stringify(tasks));

export const getTasksFromLocalSorage = () => 
  JSON.parse(localStorage.getItem(localStorageKey)) || [];