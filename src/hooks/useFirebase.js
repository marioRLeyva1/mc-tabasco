// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdyZkJcktsGqX7XsDbNNbKiKMiDKNA0hk",
  authDomain: "formulario-becas.firebaseapp.com",
  projectId: "formulario-becas",
  storageBucket: "formulario-becas.appspot.com",
  messagingSenderId: "861818739671",
  appId: "1:861818739671:web:45bda31cbf72df809c4992",
  measurementId: "G-M49SWMFXEP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export async function readData() {
    const querySnapshot = await getDocs(collection(db, "beca_bachillerato"));
    querySnapshot.forEach((doc) => console.log(doc.data()))
}

export async function writeData (data) {
    try {
        const docRef = await addDoc(collection(db, "beca_bachillerato"), data);
        return true;
    }catch(e){
        console.log('Error:', e);
        return false;
    }
}
