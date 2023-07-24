import { error, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import checkAuth from '$lib/server/checkAuth';
// import { db, auth } from '$lib/firebase';
// import { collection, addDoc } from 'firebase/firestore';

export const load = (async ({ cookies }) => {
	try {
		const user = await checkAuth(cookies);
		return user;
	} catch {
		throw redirect(302, '/login');
	}
}) satisfies PageServerLoad;

export const actions = {
	default: async ({ request }) => {
		console.log('creating flux');

		const data = await request.formData();
		const schedule = data.get('schedule');
		if (!schedule) {
			throw error(400, 'No schedule was provided.');
		}

		// console.log(auth.currentUser);

		throw redirect(303, '/flux/foobar');

		// try {
		// 	// const docRef = await
		// } catch (e) {
		// 	console.log('uh oh');
		// 	console.log(e);
		// 	return { error: e };
		// }

		// TODO post data to firestore :)
	}
} satisfies Actions;
