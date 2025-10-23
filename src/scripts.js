import { 
  toggleFinished, 
  clearList, 
  updateStats, 
  createTodoItem, 
  checkListState 
} from "./lib/todo.js";

/* TODO import á allt viðeigandi úr ./lib/todo.js */
/**
 * @param {HTMLElement} todolist
 */
function initialize(todolist) {
  const form = todolist.querySelector('.form');

  if (!form) {
    console.error('form fannst ekki, hætti')
    return;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const value = input.value.trim();

    if (value) {
      createTodoItem(todolist, value);
      input.value = '';
      input.focus();
    }
  });

  const input = todolist.querySelector('input') // Text Input fyrir nýtt atriði

  const hideFinishedButton = todolist.querySelector('.toggle-finished'); // Toggle Finished State

  hideFinishedButton?.addEventListener('click', () => {
    const areShown = toggleFinished(todolist);
    hideFinishedButton.textContent = areShown ? 'Fela kláruð' : 'Sýna kláruð';
  });

  const clearButton = todolist.querySelector('.clear-all'); // Clear all items

  clearButton?.addEventListener('click', () => {
    clearList(todolist);
  });

  updateStats(todolist);
  checkListState(todolist);
}

// Finnum todo lista og keyrum fall sem setur allt upp
const todoList = document.querySelector(".todo-list");

// Viljum vera viss um að todoList hafi fundist og sé HTMLElement
if (todoList && todoList instanceof HTMLElement) {
  initialize(todoList);
} else {
  console.error("no todo list found");
}
