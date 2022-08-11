import { initializeApp } from "firebase/app";
import { 
  collection, 
  doc, 
  getDoc, 
  getDocs, 
  getFirestore, 
  updateDoc, 
} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsA_EUXPAEwm4NFqpsaFJ4rBooeUZL0r8",
  authDomain: "portfolio-victoria.firebaseapp.com",
  projectId: "portfolio-victoria",
  storageBucket: "portfolio-victoria.appspot.com",
  messagingSenderId: "724514931657",
  appId: "1:724514931657:web:646292b6f79db572215e18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const db = getFirestore() 

//Traer los items
export const getItems = async() => {
    const items = await getDocs(collection(db, "items"))
    return items
}

//Traer un ITEM
export const getItem = async(id) => {
    const item = await getDoc(doc(db, "items", id))
    return item
}
//Generacion de order
/* export const generarOrden = async(orden) => {
  const newOrder = addDoc(collection(db, "ordenes"), {
    ...orden,
    date: Timestamp.fromDate(new Date())
  })
  return newOrder
} */
//Para manejar el stock
export const actualizarStock = async (itemId, quantity) => {
  const item = await getDoc(doc(db, "items", itemId))
  await updateDoc(doc(doc, "items", itemId), {
    stock: item.data().stock - quantity,
  })
}
