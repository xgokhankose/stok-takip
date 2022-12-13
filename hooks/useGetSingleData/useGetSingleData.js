import { useEffect, useState } from "react";
import { collection, getDoc, doc, addDoc } from "firebase/firestore/lite";
import { db } from "../../firebase-config";

function useGetSingleData(col, path) {
  const [data, setData] = useState([]);

  const getSingleData = async () => {
    try {
      const docRef = doc(db, col, path);
      const docSnap = await getDoc(docRef);
      setData(docSnap.data());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleData();
  }, []);

  return { data };
}
export default useGetSingleData;
