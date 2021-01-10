import firebase from "firebase/app";
import "firebase/database";
import "firebase/storage";

const firebaseApp = firebase.initializeApp({
	apiKey: process.env.API_KEY,
	authDomain: process.env.AUTH_DOMAIN,
	databaseURL: "https://firechat-8418d.firebaseio.com",
	projectId: process.env.PROJECT_ID,
	storageBucket: process.env.STORAGE_BUCKET,
	messagingSenderId: process.env.MESSAGING_SENDER_ID,
	appId: process.env.APP_ID,
	measurementId: process.env.MEASUREMENT_ID,
});

export const db = firebaseApp.database();
