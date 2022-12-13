import { async } from "@firebase/util";
import { collection, getDocs, doc, addDoc } from "firebase/firestore/lite";
import React, { useState } from "react";
import { SafeAreaView, TextInput, TouchableOpacity, Text, Alert } from "react-native";
import { db } from "../../../firebase-config";
import styles from "./ProductCategory.style";

const ProductCategory = () => {
  const [productName, setProductName] = useState("");
  const addData = async () => {
    await addDoc(collection(db, "productCategory"), {
      name: productName,
      isActive:true
    }).then(Alert.alert("ÜRÜN BAŞARIYLA EKLENDİ"))
  };
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        onChangeText={(text) => setProductName(text)}
        style={styles.input}
        placeholder="Ürün İsmi"
        placeholderTextColor={"#898989"}
      />
      <TouchableOpacity style={styles.button_container} onPress={addData}>
        <Text style={styles.button_text}>Kategori Ekle</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default ProductCategory;
