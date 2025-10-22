/* TODO import á allt viðeigandi úr ./lib/todo.js */
import { 
  updateStats, 
  createTodoItemElement, 
  toggleTodoItemStatus, 
  removeTodoItem, 
  toggleFinished, 
  clearList 
} from "./lib/todo.js";

/**
 * @param {HTMLElement} todolist
 */
function initialize(todolist) {
  const form = todolist.querySelector('.form')

  if (!form) {
    console.error('form fannst ekki, hætti')
    return;
  }

  console.log(form)

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if (!input) {
      console.error('input fannst ekki');
      return;
    }

    const value = input.value;

    createTodoItem(todolist, value);
    updateStats(todolist);
  })
  /* TODO finna form */
  /* TODO setja submit event handler á form */
  /* TODO finna gildi textareits í formi innan event handlers og búa til todo item útfrá því */
  /* TODO tengja „Fela kláruð atriði“ og „Hreinsa lista“ takka */
}

// Finnum todo lista og keyrum fall sem setur allt upp
const todoList = document.querySelector(".todo-list");

// Viljum vera viss um að todoList hafi fundist og sé HTMLElement
if (todoList && todoList instanceof HTMLElement) {
  initialize(todoList);
} else {
  console.error("no todo list found");
}
