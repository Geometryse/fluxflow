<script lang="ts">
	// export let start: Date;

	import Button from './Button.svelte';

	// export let end: Date;
	export let title: string;
	let paused = false;
</script>

<div class="w-full h-full flex items-center justify-center gap-8">
	<Button paused={false} />
	<p class="text-7xl h-20 font-light">00:00.00</p>
</div>
