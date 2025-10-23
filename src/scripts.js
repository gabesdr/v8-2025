import { updateStats, createTodoItem, toggleFinished, clearList } from "./lib/todo.js";

/**
 * @param {HTMLElement} todolist
 */
function initialize(todolist) {
  const form = todolist.querySelector('.form');
  const input = form?.querySelector('input[type="text"]');
  const hideFinishedButton = todolist.querySelector('.toggle-finished');
  const clearButton = todolist.querySelector('.clear-list');

  if (!form || !input) {
    console.error('form eða input fannst ekki, hætti');
    return;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const value = input.value.trim();

    if (value) {
      createTodoItem(todolist, value);
      updateStats(todolist);
      input.value = '';
      input.focus();
    }
  });

  hideFinishedButton?.addEventListener('click', () => {
    const areShown = toggleFinished(todolist);
    hideFinishedButton.textContent = areShown ? 'Fela kláruð' : 'Sýna kláruð';
  });

  clearButton?.addEventListener('click', () => {
    clearList(todolist);
  });
}


// Finnum todo lista og keyrum fall sem setur allt upp
const todoList = document.querySelector(".todo-list");

// Viljum vera viss um að todoList hafi fundist og sé HTMLElement
if (todoList && todoList instanceof HTMLElement) {
  initialize(todoList);
} else {
  console.error("no todo list found");
}
