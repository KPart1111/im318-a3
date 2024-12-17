<script>
import {onMount} from 'svelte';
let todoItem = $state('');
let todoList = $state([]);
let storedList;

onMount(() => {
     storedList = localStorage.getItem('storedList');
     if (storedList) {
          todoList = (JSON.parse(storedList));
     }
})

function updateList() {
     return storedList = localStorage.setItem('storedList', JSON.stringify
     (todoList));
}

function addItem(event) {
     event.preventDefault();
     if (todoItem == '') {
          return;
     }
     todoList = [...todoList, {
          text: todoItem,
          done: false
     }];
     updateList();
     todoItem = '';
}
function removeItem(index) {
     todoList = todoList.toSpliced(index, 1);
     updateList();
} 
function nuke() {
     todoList = [];
     localStorage.clear();
}

$inspect(todoList);

</script>

<h1>To Do:</h1>

<form onsubmit={addItem}>
<input type="text" bind:value={todoItem}>
<button type="submit">Add</button>
</form>


<ul>
     {#each todoList as item, index}
          <li>
               <input type="checkbox" bind:checked={item.done} onchange={updateList}>
               <span class:done={item.done}>{item.text}</span>
               <button type="button" onclick={()=> removeItem(index)}>X</button>
          </li>
     {/each}
</ul>
{#if (todoList.length > 0)}
     <button type="button" class="clear" onclick={nuke}>Clear</button>
     {/if}


<style>
     ul {
          list-style: none;
     }
     span.done {
          color: #4d8839;
          text-decoration: line-through;
     }
     form {
          display: flex;
     }
     input[type="text"] {
          border-top-left-radius: 50px;
          border-bottom-left-radius: 50px;
          padding: 0.6em 1rem;
          padding-right: 0;
          font-size: 1.2rem;
          font-family: "Solway", serif;
          border-right: none;
          display: inline-block;
     }
     form button {
          border-top-right-radius: 50px;
          border-bottom-right-radius: 50px;
          border-top-left-radius: 50px;
          border-bottom-left-radius: 50px;
          margin-left: -1.5rem;
          padding: 0.6em 1rem;
          font-size: 1.2rem;
          background-image: linear-gradient(#c4ffb0, #4d8839);
          background-color: #9de285;
          color: rgb(26, 26, 26);
          cursor: pointer;
          &:hover {
               background-image: linear-gradient(#b4eca1, #2a4b1f);
          }
     }
     button {
          background-color: #d25252;
          background-image: linear-gradient(#ff9b9b, #c42626);
          font-family: "Solway", serif;
          border-radius: 50px;
          font-size: 1.2rem;
          color: rgb(26, 26, 26);
          &:hover {
               background-image: linear-gradient(#d25252, #611111);
          }
     }
     ul {
          list-style: none;
          padding: 0;
     }
     li button {
          background-color: rgb(210, 82, 82);
          padding-right: 0.2rem;
          padding-left: 0.2rem;
     }
     .clear {
          padding: 0.6em 1rem;
     }
     input[type="checkbox" i] {
     accent-color: #4d8839;
     border-radius: 50px;
}
</style>