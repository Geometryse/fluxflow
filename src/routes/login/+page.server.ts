import checkAuth from '$lib/server/checkAuth';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async ({ cookies }) => {
	try {
		await checkAuth(cookies);
	} catch {
		// User isn't logged in (as expected)
		return { status: 100 };
	}
	// User is logged in; redirect to dashboard
	throw redirect(302, '/dashboard');
}) satisfies PageServerLoad;
