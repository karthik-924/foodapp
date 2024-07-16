import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebaseconfig';
// import { getFirestore } from 'firebase/firestore';
import { browserLocalPersistence, getAuth, setPersistence} from 'firebase/auth';

// console.log(firebaseConfig)/
const firebaseconfig = firebaseConfig

const app = initializeApp(firebaseconfig);

const auth = getAuth(app);
auth.useDeviceLanguage();
setPersistence(auth, browserLocalPersistence).then(() => {
  console.log("Local persistence set")
})

export { app, auth };