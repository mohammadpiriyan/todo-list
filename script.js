window.addEventListener("load", () => {
  const form = document.querySelector("#new-task-form");
  const input = document.querySelector("#new-task-input");
  const list_el = document.querySelector("#tasks");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const task = input.value;

    const task_el = document.createElement("div");
    task_el.classList.value =
      "flex justify-between bg-dark-300 p-4 rounded-lg mb-4";

    const task_content_el = document.createElement("div");
    task_content_el.classList.add("content");

    task_el.appendChild(task_content_el);

    const task_input_el = document.createElement("input");
    task_input_el.classList.value =
      "bg-transparent disabled:text-lightME text-[1.125rem] w-full block text-pinkME";
    task_input_el.type = "text";
    task_input_el.value = task;
    task_input_el.setAttribute("disabled", "disabled");

    task_content_el.appendChild(task_input_el);

    const task_actions_el = document.createElement("div");
    task_actions_el.classList.value = "flex m-[0 -0.5rem] gap-4";

    const task_edit_el = document.createElement("button");
    task_edit_el.innerText = "Edit";
    task_edit_el.classList.value =
      "cursor-pointer m-[0 0.5rem] font-[700] hover:opacity-80 active:opacity-60 text-transparent bg-clip-text bg-gradient-to-r from-pinkME to-purpleME";

    const task_delete_el = document.createElement("button");
    task_delete_el.innerText = "Delete";
    task_delete_el.classList.value =
      "cursor-pointer m-[0 0.5rem] font-[700] hover:opacity-80 active:opacity-60 text-red-700";

    task_actions_el.appendChild(task_edit_el);
    task_actions_el.appendChild(task_delete_el);

    task_el.appendChild(task_actions_el);

    list_el.appendChild(task_el);

    input.value = "";

    task_edit_el.addEventListener("click", (e) => {
      if (task_edit_el.innerText.toLowerCase() == "edit") {
        task_edit_el.innerText = "Save";
        task_input_el.removeAttribute("disabled");
        task_input_el.focus();
      } else {
        task_edit_el.innerText = "Edit";
        task_input_el.setAttribute("disabled", "disabled");
      }
    });

    task_delete_el.addEventListener("click", (e) => {
      list_el.removeChild(task_el);
    });
  });
});
