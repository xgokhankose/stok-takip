import { collection, addDoc } from "firebase/firestore/lite";
import { useState } from "react";
import {
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
  KeyboardAvoidingView,
} from "react-native";
import styles from "./Product.style";
import useGetData from "../../../hooks/useGetData";
import { SelectList } from "react-native-dropdown-select-list";
import * as ImagePicker from "expo-image-picker";
import { storage, db } from "../../../firebase-config";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { getAuth } from "firebase/auth";

const Product = () => {
  const category = "productCategory";
  const categoryData = useGetData(category);
  const categoryArray = categoryData.data;

  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productCategory, setProductCategory] = useState("undefined");
  const [image, setImage] = useState(null);

  const { currentUser } = getAuth();
  const { displayName } = currentUser;

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.uri);
      console.log(result);
    }
  };

  const uploadImage = async () => {
    if (!image) {
      return "";
    }

    const blobImage = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function () {
        reject(new TypeError("Network request failed"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", image, true);
      xhr.send(null);
    });

    const metadata = {
      contentType: "image/jpeg",
    };

    const storageRef = ref(storage, "Photos/" + Date.now());
    const uploadTask = await uploadBytesResumable(
      storageRef,
      blobImage,
      metadata
    );

    const result = await getDownloadURL(uploadTask.ref);
    return result;
  };

  const addData = async () => {
    try {
      if (productCategory == "undefined") {
        return Alert.alert("Gerekli alanları doldurunuz");
      }
      const pictureURL = await uploadImage();

      await addDoc(collection(db, "products"), {
        productCategory: productCategory,
        productName: productName,
        productDescription: productDescription,
        productPicture: pictureURL,
        addPerson: displayName,
        createdAt: new Date(),
        updatedAt: new Date(),
        isActive: true,
      });
      Alert.alert("Ürün başarıyla eklendi!");
    } catch (error) {
      console.log(error);
      Alert.alert("Ürün eklenirken beklenmedik bir hata oluştu!");
    }
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <Text style={{ margin: 5, color: "white" }}>ÜRÜN TÜRÜ SEÇİNİZ</Text>
      <Text style={styles.necessary_text}>*Gerekli</Text>
      <SelectList
        setSelected={(val) => setProductCategory(val)}
        data={categoryArray.map((item, index) => ({
          key: index,
          value: item.name,
        }))}
        save="value"
        inputStyles={styles.selectList_input}
        dropdownStyles={styles.selectList_dropdown}
        dropdownTextStyles={{ color: "white", fontSize: 18 }}
        placeholder="Ürün Türü Seçiniz"
      />

      <TextInput
        onChangeText={(text) => setProductName(text)}
        style={styles.input}
        placeholder="Ürün İsmi"
        placeholderTextColor={"#898989"}
      />
      <TextInput
        onChangeText={(text) => setProductDescription(text)}
        style={styles.input_description}
        placeholder="Ürün Açıklaması"
        placeholderTextColor={"#898989"}
        multiline={true}
        blurOnSubmit={true}
      />
      <TouchableOpacity style={styles.button_container} onPress={pickImage}>
        <Text style={styles.button_text}>Fotoğraf Ekle</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button_container} onPress={addData}>
        <Text style={styles.button_text}>Ürün Ekle</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};
export default Product;
