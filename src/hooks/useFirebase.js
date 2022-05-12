// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, doc } from "firebase/firestore"
import { firebaseConfig } from "../firebase.config";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfigs = firebaseConfig;

// Initialize Firebase
const app = initializeApp(firebaseConfigs);

const db = getFirestore(app);

export async function readData() {
    const querySnapshot = await getDocs(collection(db, "beca_bachillerato"));
    let results = [];
    querySnapshot.forEach((doc) => {
        let result = (doc.data());
        result = {...result, id: doc.id}
        results = [...results, result]
    })
    return results;
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
