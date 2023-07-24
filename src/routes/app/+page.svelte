<script lang="ts">
	import TimeApp from './TimeApp.svelte';
	import Enter from './Enter.svelte';
	import { onMount } from 'svelte';
	let textInput: string;

	let flux: App.Task[] | null = null;
	onMount(() => {
		const fluxStorage = localStorage.getItem('data');
		if (fluxStorage) {
			flux = JSON.parse(fluxStorage);
		} else {
			flux = [];
		}
	});
	const handleSubmit = (e: SubmitEvent) => {
		try {
			const data = JSON.parse(textInput) as App.Task[];
			localStorage.setItem('data', textInput);
			flux = data;
		} catch {
			alert('invalid JSON.');
		}
	};
	const handleClear = () => {
		textInput = '';
		localStorage.removeItem('data');
		flux = [];
	};
</script>

{#if flux}
	{#if flux.length > 0}
		<TimeApp {flux} on:clear={handleClear} />
	{:else}
		<Enter on:submit={handleSubmit} bind:textInput />
	{/if}
{/if}
