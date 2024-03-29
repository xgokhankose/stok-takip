import { collection, addDoc } from "firebase/firestore/lite";
import { useState } from "react";
import {
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
  KeyboardAvoidingView,
  View,
  ScrollView,
  ActivityIndicator,
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
} from "firebase/storage";
import { getAuth } from "firebase/auth";

import { useNavigation } from "@react-navigation/native";


const Product = () => {
  const category = "productCategory";
  const categoryData = useGetData(category);
  const categoryArray = categoryData.data;

  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productCategory, setProductCategory] = useState("undefined");
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [uploadImageUrl, setUploadImageUrl] = useState([
    "undefined",
    "undefined",
  ]);

  const { currentUser } = getAuth();
  const { displayName } = currentUser;

  const navigation = useNavigation();

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [9, 16],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.uri);
    }
  };

  const uploadImage = async () => {
    if (!image) {
      return ["",""];
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
    const url = await getDownloadURL(uploadTask.ref);
    const path = uploadTask.metadata.fullPath;
    
    

    return [url, path];
  };

  const addData = async () => {
    setIsLoading(true);

    try {
      if (productCategory == "undefined") {
        setIsLoading(false);
        return Alert.alert("Gerekli alanları doldurunuz");
      }
      
      const result = await uploadImage()

      
      
      await addDoc(collection(db, "products"), {
        productCategory: productCategory,
        productName: productName,
        productDescription: productDescription,
        productPicture: result[0],
        addPerson: displayName,
        createdAt: new Date(),
        updatedAt: new Date(),
        isActive: true,
        picturePath: result[1],
      });
      Alert.alert("Ürün başarıyla eklendi!");
      setIsLoading(false);
      
      setImage(undefined)
      navigation.goBack()
    } catch (error) {
      console.log(error);
      Alert.alert("Ürün eklenirken beklenmedik bir hata oluştu!");
      setIsLoading(false);
    }
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
          {!!image ? <Text style={styles.button_text}>Yeni bir fotoğraf ekle</Text>:<Text style={styles.button_text}>Fotoğraf ekle</Text>}
            
          </TouchableOpacity>
          <TouchableOpacity style={styles.button_container} onPress={addData}>
            {isLoading ? (
              <ActivityIndicator size="large" color="yellow" />
            ) : (
              <Text style={styles.button_text}>Ürün ekle</Text>
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default Product;
