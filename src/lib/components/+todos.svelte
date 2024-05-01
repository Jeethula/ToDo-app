<script lang="ts">
    import {page} from '$app/stores'
    import { enhance } from '$app/forms';

    export let data;
    let openInputField = false;

    function toggleInputField() {
        openInputField = true;
    }
    function handleClick() {
        openInputField = false;
    }
</script>

                
<section class="flex flex-col items-center mr-14 md:mr-20 ">
    {#if openInputField}
        <form class="flex items-center p-1 h-12 w-[200px] md:w-[500px] bg-white rounded-lg" method="POST" action="?/addTodo" 
        use:enhance
        >
            <button role="checkbox" aria-checked="false" class="checkbox h-6 w-6 mr-1 bg-gray-200 rounded-md cursor-pointer">
                <input type="checkbox" style="opacity: 0; width: 100%; height: 100%;" on:change={handleClick} >
            </button>   
            <input type="hidden" name="email" value={$page.data.session?.user?.email}>
            <input type="text"  name="title" class="rounded-sm h-10 w-[75%] ml-2 focus:border-none outline-none" placeholder="Type here">
            <select name="tag" class="h-7 w-[20%] ml-2 bg-white"> 
                {#each data.tags as list }
                    <option value={list.id}>{list.title}</option>
                {/each}
            </select>
            <button type="submit"></button>
        </form>
    {:else}
        <button class="mt-4 w-[200px] md:w-[500px] bg-slate-400 hover:bg-slate-300 text-white font-medium py-2 rounded-lg flex float-start px-1 " on:click={toggleInputField}>
            Write a new task.. 
        </button>
    {/if}
</section>



