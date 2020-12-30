import { addNewTask, updateTask } from "./server";

(async function () {
  await addNewTask({ name: "Spec task", isComplete: true, id: "TEST-1" });
  console.info("Added task");
  await updateTask({
    name: "Spec Task (UPDATED)",
    id: "TEST-1",
    isComplete: false,
  });
  console.info("Task updated");
})();
