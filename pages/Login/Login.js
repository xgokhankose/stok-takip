import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
} from "react-native";
import styles from "./Login.style";
import { signInWithEmailAndPassword } from "firebase/auth";
import { authentication } from "../../firebase-config";
import { getAuth } from "firebase/auth";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log(!!getAuth().currentUser);
  const handleLogin = () => {

    signInWithEmailAndPassword(authentication, email, password)
      .then(() => {
        console.log("account login !");
        handleToHome();
      })
      .catch((error) => {
        console.log(error);
        Alert.alert(error.message);
      });
  };

  const handleToCreate = () => {
    props.navigation.navigate("SignUpPage");
  };

  const handleToHome = () => {
    if (!!getAuth().currentUser) {
      props.navigation.navigate("HomeStack");
    }
  };

  useEffect(() => {
    handleToHome();
  }, [!!getAuth().currentUser]);

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <TextInput
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
        placeholder="Email"
        placeholderTextColor={"#898989"}
      />
      <TextInput
        onChangeText={(text) => setPassword(text)}
        style={styles.input}
        placeholder="Şifre"
        placeholderTextColor={"#898989"}
        secureTextEntry={true}
      />

      <TouchableOpacity onPress={handleLogin} style={styles.button_container}>
        <Text style={{ color: "white" }}>Giriş Yap</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleToCreate} style={styles.signup_button}>
        <Text style={{ color: "white" }}>Hesap Oluştur</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};
export default Login;
