import type { Writable } from 'svelte/store';

// interface AppState {

// }

declare global {
	namespace App {
		interface User {
			uid: string;
			email: string;
			name: string;
		}
		type Auth = Writable<User>;
		type FluxWritable = Writable<Flux>;
		interface Error {
			message: string;
		}

		interface LogItem {
			title: string;
			description?: string;
			start: number;
			end: number;
			type: 'work' | 'break' | 'other';
		}
		interface PlannedScheduleItem extends LogItem {
			id: number;
		}
		interface ActiveScheduleItem extends PlannedScheduleItem {
			completed: boolean;
		}
		interface Flux {
			activeSchedule: ActiveScheduleItem[];
			plannedSchedule: PlannedScheduleItem[];
			logs: LogItem[];
			state: 'work' | 'break' | 'blank';
			begin: number | null;
			end: number | null;
			current: number; // ID to plannedSchedule
		}

		interface Task {
			name: string;
			begin: number;
			end: number;
			duration: number; // in minutes
			id: number;
		}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
}

export {};
