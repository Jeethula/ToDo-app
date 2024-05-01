<script lang="ts">
    import { writable } from 'svelte/store';
    import Todo from './+todos.svelte'
    import { enhance } from '$app/forms';

    export let renderId: any 
    export let data: any;

    renderId.id === 'df58b062-5b4f-4d9e-b847-31386799ab17'
    const filteredTodo = writable<any[]>([]);

    $: {
      if (renderId.id === 'df58b062-5b4f-4d9e-b847-31386799ab17') {
            filteredTodo.set(data.todos);
        }else{
            filteredTodo.set(data.todos.filter((item: any) => item.tag_id === renderId.id));
        }
    }

</script>

<main class="p-4 flex flex-col">
    <div class=" ml-40 flex items-center gap-2 ">
        <h1 class="font-bold text-[20px]">{(renderId.title) ?? " Home"}</h1>
        <div class="h-5 w-5">
            {#if renderId.title === 'Home'}
            <i class="mi mi-home h-8 w-8"></i>
            {:else if renderId.title === 'Work'}
                <i class="mi mi-computer"></i>
            {:else if renderId.title === 'Shopping'}
                <i class="mi mi-shopping-cart-add"></i>
            {:else if renderId.title === 'Personal'}
                <i class="mi mi-heart"></i>
            {:else if renderId.title === 'Travel'}
                <i class="mi mi-image"></i>
            {:else}
                <i class="mi mi-user"></i>
            {/if}
        </div>
    </div>
    <div class="m-3">
        <div>
            <Todo data={data}  />
        </div>
        <div class="flex flex-col items-center">
        {#if $filteredTodo.length === 0}
                <h1 class="mt-7 font-medium">No data found</h1>
        {:else}
        {#each $filteredTodo as todoItem}
        <div class="flex  m-2 bg-white w-full max-w-xl h-11 items-center rounded-lg">
            <form action="?/deleteTodo" method="POST" use:enhance class="flex w-full  items-center gap-x-4">
                <input type="hidden" name="todoId" value={todoItem.id}>
                <button type="submit" class="checkbox h-5 w-5 m-3 bg-gray-200 rounded-md " >
                    <input type="checkbox" style="opacity:0;width: 100%; height: 100%;">
                </button>
                <h1 class="text-ellipsis overflow-hidden ">{todoItem?.title}</h1>
            </form>
        </div>
        {/each}
        {/if}
        </div>
    </div>
</main>

   