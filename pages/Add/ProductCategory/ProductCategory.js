import { getAuth } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore/lite";
import React, { useState } from "react";
import {
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
  KeyboardAvoidingView,
} from "react-native";
import { db } from "../../../firebase-config";
import styles from "./ProductCategory.style";

const ProductCategory = (props) => {
  const [productName, setProductName] = useState("");
  const addData = async () => {
    await addDoc(collection(db, "productCategory"), {
      name: productName,
      isActive: true,
    })
      .then(Alert.alert("ÜRÜN KATEGORİSİ BAŞARIYLA EKLENDİ"))
      .then(setProductName(""))
      .then(props.navigation.navigate("HomePage"))
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={styles.container}
    >
      <TextInput
        onChangeText={(text) => setProductName(text)}
        style={styles.input}
        placeholder="Kategori ismi"
        placeholderTextColor={"#898989"}
        value={productName}
      />
      <TouchableOpacity style={styles.button_container} onPress={addData}>
        <Text style={styles.button_text}>Kategori ekle</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};
export default ProductCategory;
