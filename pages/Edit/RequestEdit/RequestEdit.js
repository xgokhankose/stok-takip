import { doc, setDoc } from "firebase/firestore/lite";
import { useEffect, useState } from "react";
import {
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
  KeyboardAvoidingView,
  ActivityIndicator,
  ScrollView,
  View,
} from "react-native";
import { db } from "../../../firebase-config";
import styles from "./RequestEdit.style";
import useGetData from "../../../hooks/useGetData";
import { SelectList } from "react-native-dropdown-select-list";
import { getAuth } from "firebase/auth";
import useGetSingleData from "../../../hooks/useGetSingleData";

const RequestEdit = (props) => {
  const { data } = useGetSingleData("requests", props.route.params.id);

  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productCategory, setProductCategory] = useState("undefined");

  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [isUpdated, setIsUpdated] = useState(false);

  const { currentUser } = getAuth();
  const { displayName } = currentUser;

  const category = "productCategory";
  const categoryData = useGetData(category);
  const categoryArray = categoryData.data;

  const handleDelete = () =>
    Alert.alert("Silmek istediğinize emin misiniz ?", "", [
      {
        text: "Hayır",
      },
      { text: "Evet", onPress: deleteData },
    ]);

  const deleteData = async () => {
    const ref = doc(db, "requests", props.route.params.id);
    await setDoc(ref, {
      productCategory: productCategory,
      productName: productName,
      customerName: customerName,
      customerPhone: customerPhone,
      productDescription: productDescription,
      addPerson: data.addPerson,
      createdAt: data.createdAt,
      isActive: false,
      deletedAt: new Date(),
      deletedBy: displayName,
    })
      .then(Alert.alert("Talep Başarıyla Silindi."))
      .then(props.navigation.navigate("HomePage"));
  };

  const updateData = async () => {
    setIsUpdated(true);
    try {
      const ref = doc(db, "requests", props.route.params.id);
      await setDoc(ref, {
        productCategory: productCategory,
        productName: productName,
        customerName: customerName,
        customerPhone: customerPhone,
        productDescription: productDescription,
        addPerson: data.addPerson,
        createdAt: data.createdAt,
        updatedAt: new Date(),
        isActive: true,
      });
      Alert.alert("Talep Başarıyla Güncellendi.");
      setIsUpdated(false);
      props.navigation.navigate("HomePage");
    } catch (error) {
      console.log(error);
      Alert.alert("Talep güncellenirken beklenmedik bir hata oluştu!");
      setIsUpdated(false);
    }
  };
  useEffect(() => {
    setProductName(data.productName),
      setProductDescription(data.productDescription),
      setProductCategory(data.productCategory),
      setCustomerName(data.customerName),
      setCustomerPhone(data.customerPhone);
  }, [data]);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scroll_container}>
        <View style={styles.view_container}>
          <Text style={{ margin: 5, color: "white" }}>ÜRÜN TÜRÜ SEÇİNİZ</Text>
          <SelectList
            setSelected={(value) => setProductCategory(value)}
            data={categoryArray.map((item, index) => ({
              value: item.name,
            }))}
            save="name"
            inputStyles={styles.selectList_input}
            dropdownStyles={styles.selectList_dropdown}
            dropdownTextStyles={{ color: "white", fontSize: 18 }}
            placeholder={productCategory}
            value={productCategory}
          />

          <TextInput
            onChangeText={(text) => setProductName(text)}
            style={styles.input}
            placeholder="Ürün İsmi"
            placeholderTextColor={"#898989"}
            value={productName}
          />
          <TextInput
            onChangeText={(text) => setCustomerName(text)}
            style={styles.input}
            placeholder="Müşteri İsmi"
            placeholderTextColor={"#898989"}
            value={customerName}
          />
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
            value={productDescription}
            multiline={true}
            blurOnSubmit={true}
          />

          <TouchableOpacity
            style={styles.button_container_green}
            onPress={updateData}
          >
            {isUpdated ? (
              <ActivityIndicator size="large" color="yellow" />
            ) : (
              <Text style={styles.button_text}>Güncelle</Text>
            )}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button_container_red}
            onPress={handleDelete}
          >
            <Text style={styles.button_text}>Sil</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default RequestEdit;
