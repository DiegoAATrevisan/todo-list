import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import config from './firebaseConfig.json'

const firebaseConfig = config.firebaseConfig

// Inicializa firebase
const app = initializeApp(firebaseConfig);


// Inicializar firestor e auth
export const db = getFirestore(app);
export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider()