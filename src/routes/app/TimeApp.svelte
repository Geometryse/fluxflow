<script lang="ts">
	import { fade } from 'svelte/transition';
	import Timer from '../../components/simple/Timer.svelte';
	import { createEventDispatcher } from 'svelte';
	export let flux: App.Task[];
	const dispatch = createEventDispatcher();
	let finished = false;
	let currentItem = flux.findIndex((item) => Date.now() < item.end);
	const handleNext = () => {
		if (currentItem === flux.length - 1) finished = true;
		else currentItem += 1;
	};

	const handleClear = () => {
		dispatch('clear');
	};
</script>

<div class="w-full h-screen group">
	{#if finished}
		<div transition:fade class="w-full h-full flex items-center justify-center flex-col">
			<p class="text-xl mb-3">gg.</p>
			<button class="btn group-hover:opacity-100 opacity-0" on:click={handleClear}>Clear</button>
		</div>
	{:else if currentItem === -1}
		<div transition:fade class="w-full h-full flex items-center justify-center flex-col">
			<p class="text-xl mb-3">already finished.</p>
			<button class="btn group-hover:opacity-100 opacity-0" on:click={handleClear}>Clear</button>
		</div>
	{:else}
		<div transition:fade class="w-full h-full flex items-center justify-center flex-col">
			<div class="w-min flex items-center flex-col">
				<p class="text-2xl text-center">
					{flux[currentItem].name}
				</p>
				<Timer end={flux[currentItem].end} begin={flux[currentItem].begin} on:next={handleNext} />

				<p class="text-xl text-center">
					{flux[currentItem + 1]
						? `Next Item: "${flux[currentItem + 1].name}" for ${flux[currentItem + 1].duration} min`
						: 'After this, we finish!'}
				</p>
			</div>
			<button class="btn my-2 group-hover:opacity-100 opacity-0" on:click={handleClear}
				>Clear</button
			>
		</div>
	{/if}
</div>
