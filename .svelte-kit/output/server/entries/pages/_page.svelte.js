import { X as ensure_array_like, Y as stringify, S as pop, Q as push } from "../../chunks/index.js";
import { e as escape_html } from "../../chunks/escaping.js";
const replacements = {
  translate: /* @__PURE__ */ new Map([
    [true, "yes"],
    [false, "no"]
  ])
};
function attr(name, value, is_boolean = false) {
  if (value == null || !value && is_boolean || value === "" && name === "class") return "";
  const normalized = name in replacements && replacements[name].get(value) || value;
  const assignment = is_boolean ? "" : `="${escape_html(normalized, true)}"`;
  return ` ${name}${assignment}`;
}
function Todo($$payload, $$props) {
  push();
  let todoItem = "";
  let todoList = [];
  const each_array = ensure_array_like(todoList);
  $$payload.out += `<h1>To Do:</h1> <form class="svelte-glupg7"><input type="text"${attr("value", todoItem)} class="svelte-glupg7"> <button type="submit" class="svelte-glupg7">Add</button></form> <ul class="svelte-glupg7"><!--[-->`;
  for (let index = 0, $$length = each_array.length; index < $$length; index++) {
    let item = each_array[index];
    $$payload.out += `<li class="svelte-glupg7"><input type="checkbox"${attr("checked", item.done, true)} class="svelte-glupg7"> <span${attr("class", `svelte-glupg7 ${stringify([item.done ? "done" : ""].filter(Boolean).join(" "))}`)}>${escape_html(item.text)}</span> <button type="button" class="svelte-glupg7">X</button></li>`;
  }
  $$payload.out += `<!--]--></ul> `;
  if (todoList.length > 0) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<button type="button" class="clear svelte-glupg7">Clear</button>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  pop();
}
function _page($$payload) {
  $$payload.out += `<div class="header"></div> <div class="wrapper">`;
  Todo($$payload);
  $$payload.out += `<!----></div>`;
}
export {
  _page as default
};
