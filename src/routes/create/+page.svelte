<script lang="ts">
	import { enhance } from '$app/forms';
	import Button from '../../components/Button.svelte';
	import { formatTime } from '$lib/util';
	import SleepBuilder from '../../components/SleepBuilder.svelte';
	// import type { PageData } from './$types';
	// export let data: PageData;
	// const { user } = data;
	let wakeUpTime = '';
	// 5 minute increments ranging from 00:00 to 23:55
	let wakeUp = 84;
	let bedtime = 276;

	const errors = {
		wakeUpTime: false
	};

	let foundFlux = false;
	let json = false;
	const timeBlocks: App.PlannedScheduleItem[] = [];
	function beginFlux() {
		// GO TO THE POST REQUSET AND FIX IT
		//
		// // foundFlux = true;
		// // $flux = {
		// // 	state: 'work',
		// // 	begin: Date.now(),
		// // 	end: Date.now() + 20000,
		// // 	activeSchedule: [],
		// // 	plannedSchedule: [],
		// // 	logs: [],
		// // 	current: {
		// // 		start: Date.now(),
		// // 		end: null,
		// // 		id: null
		// // 	}
		// // };
	}

	function addFlux(i?: number) {
		const index = i || timeBlocks.length;
		let start: number, end: number;
		// if(!i) {
		// 	start =
		// }
		// timeBlocks[index] = { id: Date.now(), title: '', start, end };
	}

	function handleFormat() {
		try {
			wakeUpTime = formatTime(wakeUpTime);
		} catch {
			errors.wakeUpTime = true;
		}
	}
</script>

<!-- <form method="POST" class="w-full h-screen grid grid-cols-3 items-center" use:enhance> -->
<div class="w-full h-screen grid grid-cols-3 items-center">
	<div class="col-span-2 flex flex-col pl-20">
		<p class="text-4xl text-center">Schedule for today</p>
		<div class="flex items-center gap-4">
			<!-- <button class="btn w-48" type="button" on:click={() => (json = !json)}
				>switch to {json ? 'builder' : 'json'}</button
			> -->
			<!-- <div>
				<input
					type="text"
					class="input input-sm"
					style={errors.wakeUpTime ? 'border: 2px solid red' : ''}
					placeholder="Wake-up time"
					bind:value={wakeUpTime}
					on:change={handleFormat}
					on:close={() => console.log('close')}
					on:input={() => (errors.wakeUpTime = false)}
					on:focusin={() => console.log('focus-in')}
					on:focusout={handleFormat}
				/>
			</div> -->
		</div>
		<div class="p-4 flex justify-center">
			{#if !json}
				<SleepBuilder bind:wakeUp bind:bedtime />
				<div class="flex flex-col">
					{#each timeBlocks as timeBlock}
						{timeBlock.title}
					{/each}
					<!-- Plus -->
					<!-- <button
						class="btn btn-success font-black text-4xl h-16"
						type="button"
						on:click={() => addFlux()}
						><svg width="24" height="24" viewBox="0 0 24 24">
							<path fill="none" stroke="black" stroke-width="3" d="M12,22 L12,2 M2,12 L22,12" />
						</svg>
					</button> -->
				</div>
			{:else}
				<div class="form-control">
					<label class="label" for="schedule">
						<span class="label-text text-green-400 font-bold -mb-1 px-1">JSON</span>
					</label>
					<textarea
						class="textarea textarea-success h-80"
						name="schedule"
						placeholder="Input JSON here"
					/>
				</div>
			{/if}
		</div>
	</div>
	<div class="flex justify-center">
		<Button paused={true} on:click={beginFlux} size={12} />
	</div>
</div>
<!-- </form> -->
