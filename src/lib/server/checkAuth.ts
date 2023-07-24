import { redirect } from '@sveltejs/kit';
import { getAuth } from 'firebase-admin/auth';
import type { Cookies } from '@sveltejs/kit';

export default async (cookies: Cookies) => {
	const sessionCookie = cookies.get('session') || '';
	try {
		const decodedClaims = await getAuth().verifySessionCookie(sessionCookie, true);
		const user: App.User = decodedClaims as unknown as App.User;
		return { user };
	} catch (e) {
		if (sessionCookie.length > 0) cookies.delete('session', { path: '/' });
		throw redirect(302, '/login');
	}
};
