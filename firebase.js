import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCyo8WikeR0s6SgzxA4TBSq_pLJkU8hAfw",
  authDomain: "dialogfusionlanding.firebaseapp.com",
  projectId: "dialogfusionlanding",
  storageBucket: "dialogfusionlanding.appspot.com",
  messagingSenderId: "1043761051489",
  appId: "1:1043761051489:web:f34d0607c509e0184df720"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage, ref, uploadBytes, getDownloadURL };