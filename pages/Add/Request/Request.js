import { collection, addDoc } from "firebase/firestore/lite";
import { useState } from "react";
import {
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
  KeyboardAvoidingView,
  View,
} from "react-native";
import { db } from "../../../firebase-config";
import styles from "./Request.style";
import useGetData from "../../../hooks/useGetData";
import { SelectList } from "react-native-dropdown-select-list";
import { getAuth } from "firebase/auth";

const Request = () => {
  const category = "productCategory";
  const categoryData = useGetData(category);
  const categoryArray = categoryData.data;

  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productCategory, setProductCategory] = useState("undefined");
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");

  const { currentUser } = getAuth();
  const { displayName } = currentUser;

  const addData = async () => {
    console.log(customerPhone.length);
    console.log(customerName.length);
    console.log(productCategory)
    if (
      customerPhone.length < 6 ||
      customerName.length < 3 ||
      productCategory == "undefined"
    ) {
      return Alert.alert("Gerekli alanları doldurunuz");
    }
    await addDoc(collection(db, "requests"), {
      productCategory: productCategory,
      productName: productName,
      customerName: customerName,
      customerPhone: customerPhone,
      productDescription: productDescription,
      addPerson: displayName,
      createdAt: new Date(),
      updatedAt: new Date(),
      isActive: true,
    }).then(Alert.alert("Talep Başarıyla Eklendi."));
  };
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <Text style={{ margin: 5, color: "white" }}>ÜRÜN TÜRÜ SEÇİNİZ</Text>

      <Text style={styles.necessary_text}>*Gerekli</Text>

      <SelectList
        setSelected={(value) => setProductCategory(value)}
        data={categoryArray.map((item) => ({
          value: item.name,
        }))}
        save="name"
        inputStyles={styles.selectList_input}
        dropdownStyles={styles.selectList_dropdown}
        dropdownTextStyles={{ color: "white", fontSize: 18 }}
        placeholder="Ürün Türü Seçiniz"
        boxStyles={styles.selectlist_box}
      />

      <TextInput
        onChangeText={(text) => setProductName(text)}
        style={styles.input}
        placeholder="Ürün İsmi"
        placeholderTextColor={"#898989"}
      />
      <Text style={styles.necessary_text}>*Gerekli</Text>
      <TextInput
        onChangeText={(text) => setCustomerName(text)}
        style={styles.input}
        placeholder="Müşteri İsmi"
        placeholderTextColor={"#898989"}
      />
      <Text style={styles.necessary_text}>*Gerekli</Text>
      <TextInput
        onChangeText={(text) => setCustomerPhone(text)}
        style={styles.input}
        placeholder="Müşteri Telefon Numarası"
        placeholderTextColor={"#898989"}
      />
      <TextInput
        onChangeText={(text) => setProductDescription(text)}
        style={styles.input_description}
        placeholder="Talep Açıklaması"
        placeholderTextColor={"#898989"}
        multiline={true}
        blurOnSubmit={true}
      />

      <TouchableOpacity style={styles.button_container} onPress={addData}>
        <Text style={{ color: "white" }}>ÜRÜN EKLE</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};
export default Request;
