<script lang="ts">
	import { fade } from 'svelte/transition';
	import Timer from '../../components/simple/Timer.svelte';
	import { createEventDispatcher } from 'svelte';
	import { getMSSinceMidnight } from '$lib/util';
	export let flux: App.Task[];
	const dispatch = createEventDispatcher();
	let finished = false;
	let currentItem = flux.findIndex((item) => getMSSinceMidnight() < item.end * 60 * 1000);
	//;
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
			<div class="flex-1" />
			<p class="text-xl mb-3">gg.</p>
			<div class="flex-1 py-5">
				<button class="btn my-2 group-hover:opacity-100 opacity-0" on:click={handleClear}
					>Clear</button
				>
			</div>
		</div>
	{:else if currentItem === -1}
		<div transition:fade class="w-full h-full flex items-center justify-center flex-col">
			<div class="flex-1 py-5" />
			<p class="text-xl mb-3">already finished.</p>
			<div class="flex-1">
				<button class="btn my-2 group-hover:opacity-100 opacity-0" on:click={handleClear}
					>Clear</button
				>
			</div>
		</div>
	{:else}
		<div transition:fade class="w-full h-full flex items-center flex-col">
			<div
				class="flex-1 w-full flex flex-col justify-between group-hover:opacity-100 opacity-0 transition-opacity duration-[400ms]"
			>
				<div class="ml-auto p-2 flex gap-2">
					<button class="btn" on:click={handleClear}>Clear</button>
				</div>
				<p
					class="w-full text-2xl text-center my-1 group-hover:opacity-100 opacity-0 transition-opacity duration-300"
				>
					{flux[currentItem].name}
				</p>
			</div>
			<div class="w-min flex items-center flex-col">
				<Timer
					end={flux[currentItem].end * 60 * 1000}
					begin={flux[currentItem].begin * 60 * 1000}
					on:next={handleNext}
				/>
			</div>
			<div class="flex-1">
				<p
					class="text-xl text-center group-hover:opacity-100 opacity-0 transition-opacity duration-300"
				>
					{flux[currentItem + 1]
						? `Next Item: "${flux[currentItem + 1].name}" for ${flux[currentItem + 1].duration} min`
						: 'After this, we finish!'}
				</p>
			</div>
		</div>
	{/if}
</div>
