import { doc, setDoc } from "firebase/firestore/lite";
import { useState, useEffect } from "react";
import {
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
  KeyboardAvoidingView,
  View,
  Image,
} from "react-native";
import { db } from "../../../firebase-config";
import styles from "./ProductEdit.style";
import useGetData from "../../../hooks/useGetData";
import { SelectList } from "react-native-dropdown-select-list";
import * as ImagePicker from "expo-image-picker";
import { storage } from "../../../firebase-config";
import { ref, uploadBytesResumable, getDownloadURL ,deleteObject} from "firebase/storage";
import { getAuth } from "firebase/auth";
import useGetSingleData from "../../../hooks/useGetSingleData";

const ProductEdit = (props) => {
  const { data } = useGetSingleData("products", props.route.params.id);
  console.log(data);

  const category = "productCategory";
  const categoryData = useGetData(category);
  const categoryArray = categoryData.data;

  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productCategory, setProductCategory] = useState("undefined");
  const [image, setImage] = useState(null);
  const [picture,setPicture] =useState(data.productPicture)

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
      setPicture(result.uri)
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
    setPicture(result)
    return result;
  };

  const uptadeData = async () => {
    try {
      const pictureURL = await uploadImage();
      const ref = doc(db, "products", props.route.params.id);
      await setDoc(ref, {
        productCategory: productCategory,
        productName: productName,
        productDescription: productDescription,
        productPicture: picture,
        addPerson: data.addPerson,
        createdAt:data.createdAt,
        isActive: data.isActive,
        productPicture:pictureURL
      });
      Alert.alert("Ürün başarıyla güncellendi!");
    } catch (error) {
      console.log(error);
      Alert.alert("Ürün güncellenirken beklenmedik bir hata oluştu!");
    }
  };
  useEffect(() => {
    setProductName(data.productName),
      setProductDescription(data.productDescription),
      setProductCategory(data.productCategory);
      setPicture(data.productPicture)
  }, [data]);
  return (
    <KeyboardAvoidingView
      behavior="padding"
      focusable={false}
      style={styles.container}
    >
      <Text style={{ margin: 5, color: "white" }}>ÜRÜN TÜRÜ SEÇİNİZ</Text>
      <SelectList
        setSelected={(val) => setProductCategory(val)}
        data={categoryArray.map((item, index) => ({
          value: item.name,
        }))}
        save="value"
        inputStyles={styles.selectList_input}
        dropdownStyles={styles.selectList_dropdown}
        dropdownTextStyles={{ color: "white", fontSize: 18 }}
        placeholder={productCategory}
      />

      <TextInput
        onChangeText={(text) => setProductName(text)}
        style={styles.input}
        placeholder="Ürün İsmi"
        placeholderTextColor={"#898989"}
        value={productName}
      />
      <View style={styles.description_container}>
        <TextInput
          onChangeText={(text) => setProductDescription(text)}
          style={styles.input_description}
          placeholder="Ürün Açıklaması"
          placeholderTextColor={"#898989"}
          value={productDescription}
          multiline={true}
          blurOnSubmit={true}
        />
      </View>
      <Image style={styles.image} source={{ uri: picture}} />

      <TouchableOpacity
        style={styles.button_container_photo}
        onPress={pickImage}
      >
        <Text style={styles.button_text_photo}>Yeni bir fotoğraf ekle</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button_container_green}
        onPress={uptadeData}
      >
        <Text style={styles.button_text}>Ürünü güncelle</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button_container_red}
        onPress={uptadeData}
      >
        <Text style={styles.button_text}>Ürünü sil</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};
export default ProductEdit;
