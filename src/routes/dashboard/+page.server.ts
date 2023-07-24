import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import checkAuth from '$lib/server/checkAuth';

export const load = (async ({ cookies }) => {
	try {
		const user = await checkAuth(cookies);
		return user;
	} catch {
		throw redirect(302, '/login');
	}
}) satisfies PageServerLoad;
