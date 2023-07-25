<script lang="ts">
	import { createEventDispatcher, onDestroy, onMount } from 'svelte';
	export let end: number;
	export let begin: number;
	let minutesStr = '00';
	let secondsStr = '00';
	let msStr = '00';
	let interval: NodeJS.Timer;
	let percentDone: number;
	const dispatch = createEventDispatcher();

	const formatTime = (value: number) => {
		if (value < 10) return '0' + value;
		else return value.toString();
	};

	const formatMS = (value: number) => {
		value = Math.floor(value / 10); // This will give us the first two digits of the milliseconds
		if (value < 10) return '0' + value;
		else return value.toString();
	};

	const recalculateTime = () => {
		let remainingTime = end - Date.now(); // in MS
		percentDone = Math.round((-(begin - Date.now()) / (end - begin)) * 10000) / 100;
		const minutes = Math.floor(remainingTime / 1000 / 60);
		const seconds = Math.floor((remainingTime / 1000) % 60);
		const ms = remainingTime % 1000;
		if (minutes < 0 && seconds < 0 && ms < 0) {
			dispatch('next');
			return;
		}

		minutesStr = formatTime(minutes);
		secondsStr = formatTime(seconds);
		msStr = formatMS(ms);
	};
	recalculateTime();

	onMount(() => {
		interval = setInterval(() => {
			recalculateTime();
		}, 1000 / 60);
	});
	onDestroy(() => {
		if (interval) clearInterval(interval);
	});
</script>

<div class="flex items-center justify-center gap-8 my-4" style="font-family: 'Space Mono', monospace;">
	<p class="text-7xl h-20 font-light">{minutesStr}:{secondsStr}.{msStr}</p>
</div>

<div class="absolute bottom-0 left-0 h-1 bg-white" style="width: {percentDone}%" />
