import React, { useState } from "react";
import {
  Alert,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import styles from "./SignUp.style";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { authentication } from "../../firebase-config";
import KeyboardAvoidingView from "react-native/Libraries/Components/Keyboard/KeyboardAvoidingView";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [name, setName] = useState("");

  const handleCreateAccount = () => {
    if(password!=passwordConfirm){
      return Alert.alert("Şifreler birbiriyle uyuşmuyor.")
    }
    if(name.length<3){
      return Alert.alert("Lütfen isim ve soy ismi giriniz.")
    }
    createUserWithEmailAndPassword(authentication, email, password)
      .then((userCredential) => {
        console.log("account created !");
        const user = userCredential.user;
        updateProfile(user, { displayName: name });
        Alert.alert("Hesap Başarıyla Oluşturuldu.");
      })
      .catch((error) => {
        console.error();
        Alert.alert(error.message);
      });
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <TextInput
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
        placeholder="Email"
        placeholderTextColor={"#898989"}
      />
      <TextInput
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
        style={styles.input}
        placeholder="Şifre"
        placeholderTextColor={"#898989"}
      />
      <TextInput
        secureTextEntry={true}
        onChangeText={(text) => setPasswordConfirm(text)}
        style={styles.input}
        placeholder="Şifre"
        placeholderTextColor={"#898989"}
      />
      <TextInput
        onChangeText={(text) => setName(text)}
        style={styles.input}
        placeholder="Ad Soyad"
        placeholderTextColor={"#898989"}
      />
      <TouchableOpacity
        onPress={handleCreateAccount}
        style={styles.button_container}
      >
        <Text style={{ color: "white" }}>Kayıt Ol</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};
export default SignUp;
