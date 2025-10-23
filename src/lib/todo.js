import { empty } from "./elements.js";
// Leyfilegt að breyta skilgreiningum á föllum og bæta við fleiri föllum.

/**
 * Breytir stöðu atriðis í lista. Ef kláruð atriði eru sýnd er það sýnt, annars er það falið um leið og það er klárað.
 * @param {HTMLElement} item
 * @param {boolean} isShown `true` ef kláruð atriði eru sýnileg, annars `false`.
 * @returns {void}
 */

export function toggleTodoItemStatus(item, isShown = true) {
  const checkbox = item.querySelector('input[type="checkbox"]');
  if (!checkbox) {
    return;
  }
  const isFinished = checkbox.checked;
  item.classList.toggle('finished', isFinished);
  if (isFinished && !isShown) {
    item.classList.add('hidden');
  } else {
    item.classList.remove('hidden');
  }
}

/**
 * Fjarlægja atriði (sem DOM element) úr lista.
 * @param {HTMLElement} item
 * @returns {void}
 */
export function removeTodoItem(item) {
  console.log("EYÐA", item);
  const spanEl = item.querySelector("span.item");
  const todolist = item.closest('.todo-list');

  let text = "<unknown item>";
  if (!spanEl) {
    console.warn("cannot find spanEl");
  } else {
    text = spanEl.textContent;
  }

  if (confirm(`Viltu eyða „${text}“?`)) {
    item.remove();
    if (todolist) {
      updateStats(todolist);
      checkListState(todolist);
    }
  }
}

/**
 * Breytir sýnileika kláraðra atriða í lista.
 * @param {HTMLElement} todolist
 * @return {boolean} `true` if finished items are shown, `false` if hidden
 */
export function toggleFinished(todolist) {
  const finishedItems = todolist.querySelectorAll('.list li.finished');
  if (finishedItems.length === 0) {
    return true
  }

  const isHidden = finishedItems[0].classList.contains('hidden');

  finishedItems.forEach(item => {
    item.classList.toggle('hidden', !isHidden);
  });

  return isHidden;
}

/**
 * Hreinsar allan lista.
 * @param {HTMLElement} todolist
 * @return {void}
 */
export function clearList(todolist) {
  const list = todolist.querySelector('ul.list');
  if (!list || list.children.length === 0) {
    return;
  }

  if (confirm('Viltu eyða öllum atriðum á listanum?')) {
    empty(list);
    updateStats(todolist);
    checkListState(todolist);
  }
}

/**
 * Uppfærir upplýsingar um fjölda kláraðra og ókláraðra atriða í lista.
 * @param {HTMLElement} todolist
 * @return {void}
 */
export function updateStats(todolist) {
  const finishedEl = todolist.querySelector(".stats .finished");
  const unfinishedEl = todolist.querySelector(".stats .unfinished");

  if (!finishedEl || !unfinishedEl) {
    console.warn("could not find finished/unfinished nodes");
    return;
  }

  const allItems = todolist.querySelectorAll(".list li");
  const allFinishedItems = todolist.querySelectorAll(".list li.finished");

  if (!allItems || !allFinishedItems) {
    return;
  }

  const finishedCount = allFinishedItems.length;
  const unfinishedCount = allItems.length - finishedCount;

  finishedEl.textContent = finishedCount.toString();
  unfinishedEl.textContent = unfinishedCount.toString();
}

/**
 * Býr til nýtt atriði í lista með texta `text`.
 * @param {HTMLElement} todolist
 * @param {string} text
 * @return {void}
 */
export function createTodoItem(todolist, text) {
  const li = document.createElement("li");

  const button = document.createElement("button");
  button.textContent = "🗑️";
  button.addEventListener("click", () => {
    removeTodoItem(li);
    updateStats(todolist);
  });

  const input = document.createElement("input");
  input.setAttribute("type", "checkbox");
  input.setAttribute("name", "finished");
  input.addEventListener("change", () => {
    console.log("input", input.checked);
  });

  const span = document.createElement("span");
  span.classList.add("item");
  span.textContent = text;

  const label = document.createElement("label");

  label.appendChild(input);
  label.appendChild(span);
  li.appendChild(label);
  li.appendChild(button);

  const list = todolist.querySelector("ul.list");
  list?.appendChild(li);
}

/**
 * Athugar hvort listinn sé tómur og sýnir eða felur skilaboð um tóman lista.
 * @param {HTMLElement} todolist
 * @return {void}
 */
export function checkListState(todolist) {
  const list = todolist.querySelector('ul.list');
  const emptyMessage = todolist.querySelector('.empty');

  if (!list || !emptyMessage) {
    return;
  }

  const hasItems = list.children.length > 0;
  list.classList.toggle('hidden', !hasItems);
  emptyMessage.classList.toggle('hidden', hasItems);
}