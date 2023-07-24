import { error } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';
import { getAuth } from 'firebase-admin/auth';
import type { CookieSerializeOptions } from 'cookie';
export const POST = (async ({ request, cookies }) => {
	const { idToken } = await request.json();
	if (!idToken) throw error(400, 'idToken was not provided');

	// Token expires in 2 weeks
	const expiresIn = 60 * 60 * 24 * 14 * 1000;

	try {
		const sessionCookie = await getAuth().createSessionCookie(idToken, { expiresIn });
		const options: CookieSerializeOptions = {
			maxAge: expiresIn,
			httpOnly: true,
			secure: true,
			path: '/'
		};
		cookies.set('session', sessionCookie, options);
	} catch {
		throw error(401, 'UNAUTHORIZED REQUEST');
	}
	return new Response();
}) satisfies RequestHandler;
