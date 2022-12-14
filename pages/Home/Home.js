import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import styles from "./Home.style";
import {  signOut ,getAuth} from "firebase/auth";
import { get } from "react-native/Libraries/Utilities/PixelRatio";

const Home = (props) => {
  console.log("home",getAuth().currentUser)
  const navigateProductCategory = () => {
    return props.navigation.navigate("ProductCategoryPage");
  };
  const navigateProduct = () => {
    return props.navigation.navigate("ProductPage");
  };
  const navigateRequest = () => {
    return props.navigation.navigate("RequestPage");
  };
  const navigateViewRequest = () => {
    return props.navigation.navigate("ViewRequestPage");
  };
  const navigateViewProduct = () => {
    return props.navigation.navigate("ViewProduct");
  };
  const logout = async() => {
    await signOut(getAuth())
    return console.log("çıkış yapıldı")
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inner_container}>
        <TouchableOpacity
          onPress={navigateViewRequest}
          style={styles.view_button}
        >
          <Text style={styles.add_button_text}>TALEPLER</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={navigateRequest} style={styles.add_button}>
          <Text style={styles.add_button_text}>TALEP EKLE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={navigateViewProduct}
          style={styles.view_button}
        >
          <Text style={styles.add_button_text}>ÜRÜNLER</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={navigateProduct} style={styles.add_button}>
          <Text style={styles.add_button_text}>ÜRÜN EKLE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={navigateProductCategory}
          style={styles.add_button}
        >
          <Text style={styles.add_button_text}>ÜRÜN KATEGORİSİ EKLE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={logout}
          style={styles.exit_button}
        >
          <Text style={styles.add_button_text}>ÇIKIŞ YAP</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;
