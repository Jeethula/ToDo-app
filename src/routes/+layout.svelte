
<script>
	import '../app.pcss';
	import {signIn} from "@auth/sveltekit/client";   
	import {page} from '$app/stores'; 
	import Navbar from '../lib/components/+navbar.svelte'
</script>

<div class="p-2">
	{#if $page.data.session}
		<div >
			<Navbar/>
			<slot/>
		</div>
	{:else}
	 <div class="flex items-center justify-center align-middle h-screen w-screen">
		<button class="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-900 focus:outline-none font-bold focus:ring-gray-600"
         on:click={()=>signIn("github")}>
         Signing with GitHub
		</button>
	 </div>
	{/if}
	
</div>



