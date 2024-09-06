import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import config from './firebaseConfig.json'

const firebaseConfig = config.firebaseConfig

// Inicializa firebase
const app = initializeApp(firebaseConfig);


// Inicializar firestor e auth
export const db = getFirestore(app);
export const auth = getAuth(app);



// rules_version = '2';

// service cloud.firestore {
//     match / databases / { database } / documents {
//         match / { document=**} {
//       allow read, write: if false;
//         }
//     }
// }