import { collection, addDoc } from "firebase/firestore/lite";
import { useEffect, useState } from "react";
import {
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
  KeyboardAvoidingView,
  View,
  ScrollView,
} from "react-native";
import { db } from "../../../firebase-config";
import styles from "./Request.style";
import useGetData from "../../../hooks/useGetData";
import { SelectList } from "react-native-dropdown-select-list";
import { getAuth } from "firebase/auth";
import { KeyboardAvoidingScrollView } from "react-native-keyboard-avoiding-scroll-view";

import Loading from "../../../components/Loading";

const Request = () => {
  const category = "productCategory";
  const categoryData = useGetData(category);
  const categoryArray = categoryData.data;

  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productCategory, setProductCategory] = useState("undefined");
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [loading, setLoading] = useState(false);

  const { currentUser } = getAuth();
  const { displayName } = currentUser;

  const addData = async () => {
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
    })
      .then(Alert.alert("Talep Başarıyla Eklendi."))
      .then(
        setProductName(""),
        setProductDescription(""),
        setProductCategory("undefined"),
        setCustomerName(""),
        setCustomerPhone("")
      );
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scroll_container}>
        <View style={styles.view_container}>
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
            placeholder="Seçiniz"
            boxStyles={styles.selectlist_box}
          />

          
          <TextInput
            onChangeText={(text) => setProductName(text)}
            style={styles.input}
            placeholder="Ürün İsmi"
            placeholderTextColor={"#898989"}
            value={productName}
          />


          <Text style={styles.necessary_text}>*Gerekli</Text>
          <TextInput
            onChangeText={(text) => setCustomerName(text)}
            style={styles.input}
            placeholder="Müşteri İsmi"
            placeholderTextColor={"#898989"}
            value={customerName}
          />
          <Text style={styles.necessary_text}>*Gerekli</Text>
          <TextInput
            onChangeText={(text) => setCustomerPhone(text)}
            style={styles.input}
            placeholder="Müşteri Telefon Numarası"
            placeholderTextColor={"#898989"}
            value={customerPhone}
          />
          <TextInput
            onChangeText={(text) => setProductDescription(text)}
            style={styles.input_description}
            placeholder="Talep Açıklaması"
            placeholderTextColor={"#898989"}
            multiline={true}
            blurOnSubmit={true}
            value={productDescription}
          />

          <TouchableOpacity style={styles.button_container} onPress={addData}>
            <Text style={styles.button_text}>Talep Ekle</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default Request;
