import {
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";
import { database } from "../firebase.config";

// Guardar nuevo producto

export const saveItem = async (data) => {
  await setDoc(doc(database, "foodItems", `${Date.now()}`), data, {
    merge: true,
  });
};

// Traer todos los productos

export const getAllFoodItems = async () => {
  const items = await getDocs(
    query(collection(database, "foodItems"), orderBy("id", "desc"))
  );

  return items.docs.map((doc) => doc.data());
};
