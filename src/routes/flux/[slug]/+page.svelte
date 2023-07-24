<script lang="ts">
	import { fade } from 'svelte/transition';
	import { writable } from 'svelte/store';
	import Timer from '../../../components/Timer.svelte';

	const flux: App.FluxWritable = writable();
</script>

{#if $flux}
	<div transition:fade class="w-full h-screen p-5">
		<div class="grid grid-cols-3 grid-rows-2 h-full">
			<div class="grid grid-rows-2 p-10 gap-10">
				<Timer title="Work" />
				<Timer title="Break" />
			</div>
			<div class="col-span-2">test2</div>
			<div class="">test3</div>
			<div class="">test3</div>
			<div class="">test3</div>
		</div>
	</div>
{/if}
