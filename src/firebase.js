import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyD4CTrCfRJJzkx-yfCAeX8cgAbuJWWkyFw",
    authDomain: "auth-login-c5d84.firebaseapp.com",
    projectId: "auth-login-c5d84",
    storageBucket: "auth-login-c5d84.appspot.com",
    messagingSenderId: "425138230669",
    appId: "1:425138230669:web:61dac60ee02f4f09a019c4"
})

export const auth = app.auth()
export default app