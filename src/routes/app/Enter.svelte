<script lang="ts">
	import { fade } from 'svelte/transition';

	export let textInput: string;
	let isModalOpen = false;
</script>

<form class="w-full h-screen flex items-center flex-col gap-3" on:submit|preventDefault>
	<div class="flex-1" />
	<div class="form-control">
		<label class="label" for="scheudle">
			<span class="label-text">Enter in your JSON schedule below</span>
		</label>
		<textarea
			class="textarea textarea-success h-96 w-96"
			name="schedule"
			bind:value={textInput}
			placeholder="Input JSON here"
		/>
		<button type="submit" class="btn w-full my-3">Submit</button>
		<a href="https://productivity-app-neon.vercel.app/app" target="_blank" class="link"
			>Build your schedule here</a
		>
	</div>
	<div class="flex-1 w-96">
		<!-- {#if textInput.length > 0}
			<div transition:fade={{ duration: 100 }} class="flex justify-center w-full">
				<button type="button" class="btn my-3 w-1/2">Save this schedule</button>
			</div>{/if} -->
	</div>
</form>
