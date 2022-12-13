import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  doc,
  addDoc,
  query,
  where,
} from "firebase/firestore/lite";
import { db } from "../../firebase-config";

function useGetData(category) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const categoryCol = query(
        collection(db, category),
        where("isActive", "==", true)
      );
      const querySnapshot = await getDocs(categoryCol);
      const tempData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setData(tempData);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { data, loading };
}

export default useGetData;
