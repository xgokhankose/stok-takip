import React, { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  ActivityIndicator,
} from "react-native";
import styles from "./SignIn.style";
import { signInWithEmailAndPassword } from "firebase/auth";
import { authentication } from "../../firebase-config";
const SignIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    setIsLoading(true);
    signInWithEmailAndPassword(authentication, email, password)
      .then(() => {
        console.log("account login !");
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        Alert.alert(error.message);
        setIsLoading(false);
      });
  };

  const handleToCreate = () => {
    props.navigation.navigate("SignUpPage");
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={styles.container}
    >
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
        {isLoading ? (
          <ActivityIndicator size="large" color="yellow" />
        ) : (
          <Text style={{ color: "white" }}>Kayıt Ol</Text>
        )}
      </TouchableOpacity>
      <TouchableOpacity onPress={handleToCreate} style={styles.signup_button}>
        <Text style={{ color: "white" }}>Hesap Oluştur</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};
export default SignIn;
