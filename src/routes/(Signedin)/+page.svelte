<script lang="ts">
    import List from "../../lib/components/+list.svelte"
    import Details from "../../lib/components/+details.svelte"

    export let data
    export let form
    let clickedId: string | null = data.tags[0].id

    function key(e: CustomEvent<string>){
        console.log(e.detail)
        if(e.detail){
         clickedId = e.detail
        }

    }

</script>

<main class="flex flex-col md:flex-row bg-slate-100 h-full md:h-screen rounded-lg mt-2">
    <aside class="bg-white md:w-1/4 rounded-lg p-2 mt-2 ml-2">  
        <List on:clickedKey={key} data={data} form={form} /> 
    </aside>
    <section class="p-2 mt-2 ml-2 w-full md:w-3/4">
        <Details renderId={clickedId} data={data} />
    </section>
</main>
