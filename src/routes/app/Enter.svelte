<script lang="ts">
	export let textInput: string;
</script>

<form class="w-full h-screen flex items-center justify-center flex-col" on:submit|preventDefault>
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
	</div>
	<a href="https://productivity-app-neon.vercel.app/app" target="_blank" class="link"
		>Build your schedule here</a
	>
</form>
