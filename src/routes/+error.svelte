<script>
	import { page } from '$app/stores';
</script>

<main class="w-full h-screen flex items-center justify-center flex-col gap-10">
	<div class="flex flex-col">
		<h1 class="text-[14rem] -my-16 font-thin">{$page.status}</h1>
		<p class="ml-auto text-[#CCCCCC]">...that's an error</p>
	</div>
	<p class="text-[#CCCCCC] text-xl">
		Error message: {$page?.error?.message}
	</p>
</main>
<!-- <h1>{$page.status}: {$page?.error?.message}</h1> -->
