<script lang="ts">
	export let paused: boolean;
	export let size = 8; // in rem

	const fontSize = size / 5.333333,
		lineHeight = size / 4;
</script>

<button
	class="rounded-full aspect-square {paused ? 'start-button' : 'stop-button'}"
	style="width: {size}rem"
	on:click
>
	<p
		class="text-2xl {paused ? 'start-text' : 'stop-text'}"
		style="font-size: {fontSize}rem;line-height: {lineHeight}rem"
	>
		{paused ? 'Start' : 'Stop'}
	</p>
</button>

<style>
	.start-button {
		background-color: #092911;
	}
	.start-text {
		color: #30d65a;
	}
	.stop-button {
		background-color: #340e0b;
	}
	.stop-text {
		color: #b73326;
	}
</style>
