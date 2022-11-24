import React from "react";
import { SafeAreaView, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./SignUp.style";

const SignUp = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor={"#898989"}
      />
      <TextInput
        style={styles.input}
        placeholder="Şifre"
        placeholderTextColor={"#898989"}
      />
      <TextInput
        style={styles.input}
        placeholder="Ad Soyad"
        placeholderTextColor={"#898989"}
      />

      <TouchableOpacity style={styles.button_container}>
        <Text style={{ color: "white" }}>Kayıt Ol</Text>
      </TouchableOpacity>
      
    </SafeAreaView>
  );
};
export default SignUp;
