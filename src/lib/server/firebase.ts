import { getFirestore } from 'firebase-admin/firestore';
// import * as admin from 'firebase-admin';
import { FIREBASE_SERVICE_ACCOUNT } from '$env/static/private';
import { building } from '$app/environment';
import type { App } from 'firebase-admin/app';
import { initializeApp, getApps, cert } from 'firebase-admin/app';
import type { Firestore } from 'firebase-admin/firestore';

let app: App;
let db: Firestore;
if (!FIREBASE_SERVICE_ACCOUNT) {
	throw new Error('The FIREBASE_SERVICE_ACCOUNT environment variable is not defined');
}

const serviceAccount = JSON.parse(FIREBASE_SERVICE_ACCOUNT);
if (!building) {
	if (getApps().length === 0) {
		app = initializeApp({ credential: cert(serviceAccount) });
		console.log('app initialized');
	}
	db = getFirestore();
}
export { app as firebaseApp, db };
