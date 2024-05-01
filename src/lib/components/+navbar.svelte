<script>
    import {page} from '$app/stores';
	import { signOut } from '@auth/sveltekit/client';
</script>

<header class="flex justify-between items-center w-full px-4 py-2 bg-gray-100">
    <div class="flex gap-x-3 flex-col sm:flex-row">
        <h1 class="text-xl font-bold text-blue-500">Tono.ai</h1>
        <h1 class="text-lg">Welcome,<span class="font-bold">{$page.data.session?.user?.name}</span> </h1>
    </div>
    <div class="flex gap-x-3 items-center">
        <button class="px-3 py-2 md:px-4 md:py-2 md:p-1 md:h-8 md:items-center md:flex w-fit bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500" on:click={()=>signOut()}>Sign Out</button>
        <img src={$page.data.session?.user?.image} alt="userProfile" class="h-12 w-12 rounded-full">
    </div>
</header>
