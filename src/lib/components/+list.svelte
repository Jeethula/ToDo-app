
<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import { enhance } from '$app/forms';
 
    const dispatch = createEventDispatcher();
    export let form;
    export let data: any;

    let listShow = false;

    function handleClick(tags:any) {
        dispatch("clickedKey",tags)
    }
    function handleButton() {
        listShow = true;
    }
    function handleClose() {
        listShow = false;
    }
    function countTodos(tagId: string) {
        if(tagId==="df58b062-5b4f-4d9e-b847-31386799ab17")
            return (data as any).todos.length;
        else
        return (data as any).todos.filter((todo: any) => todo.tag_id === tagId).length;
    }
</script>


<main on:mouseleave={handleClose} class="flex flex-col mx-5 my-4">

    {#each data.tags as tags (tags.id)}
        <div role="button" class=" hover:bg-gray-50 hover:rounded-lg flex items-center justify-between gap-y-2 px-4 py-4  " on:click={()=>handleClick(tags)}>
            <button class="text-base " >{tags.title}</button> 
             <div class="bg-gray-100 h-5 w-5 text-gray-500 flex items-center justify-center rounded-md ">{countTodos(tags.id)}</div>
        </div>
    {/each}

    {#if listShow || form?.newList}
    <form method="POST" action="?/newList" 
    use:enhance
    >
        <input name="list" id="inputField" class="m-1 p-1 h-10 w-full "  type="text" value={form?.newList ?? ""}  placeholder=" Add new list">
        <button on:submit></button>
    </form>
    {:else}
        <button class=" flex items-start  px-4 py-4" on:click={handleButton} >+ Create new list</button>
    {/if}
</main>