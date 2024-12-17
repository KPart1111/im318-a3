<script>
let todoItem = $state('');
let todoList = $state([]);

function addItem(event) {
     event.preventDefault();
     if (todoItem == '') {
          return;
     }
     todoList = [...todoList, {
          text: todoItem,
          done: false
     }];
     todoItem = '';
}
function removeItem(index) {
     todoList = todoList.toSpliced(index, 1);
} 
function nuke() {
     todoList = [];
}

$inspect(todoList);

</script>

<form onsubmit={addItem}>
<input type="text" bind:value={todoItem}>
<button type="submit">Add</button>
</form>

<ul>
     {#each todoList as item, index}
          <li>
               <input type="checkbox" bind:checked={item.done}>
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
          background-color: #9de285;
          cursor: pointer;
          &:hover {
               background-color: #4d8839;
          }
     }
     button {
          background-color: rgb(210, 82, 82);
          font-family: "Solway", serif;
          border-radius: 50px;
          font-size: 1.2rem;
          &:hover {
               background-color: rgb(163, 31, 31);
          }
     }
     ul {
          list-style: none;
          padding: 0;
     }
     li button {
          background-color: rgb(210, 82, 82);
     }
     .clear {
          padding: 0.6em 1rem;
     }
     input[type="checkbox" i] {
     accent-color: #4d8839;
     border-radius: 50px;
}
</style>