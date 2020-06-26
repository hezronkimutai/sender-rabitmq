import * as firebase from "firebase";
import * as dotenv from "dotenv";

dotenv.config();

const {
  API_KEY,
  AUTHDOMAIN,
  DATABASEURL,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
  APP_ID,
  MEASUREMENT_ID,
} = process.env;

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTHDOMAIN,
  databaseURL: DATABASEURL,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
  measurementId: MEASUREMENT_ID,
};
// firebase.analytics();
export default firebase.initializeApp(firebaseConfig);
