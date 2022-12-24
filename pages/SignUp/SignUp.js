import React, { useCallback, useState } from "react";
import {
  Alert,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./SignUp.style";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { authentication } from "../../firebase-config";
import KeyboardAvoidingView from "react-native/Libraries/Components/Keyboard/KeyboardAvoidingView";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [name, setName] = useState("");

  const handleCreateAccount = () => {
    if (password != passwordConfirm) {
      return Alert.alert("Şifreler birbiriyle uyuşmuyor.");
    }
    if (name.length < 3) {
      return Alert.alert("Lütfen isim ve soy ismi giriniz.");
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
 
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={styles.container}
      >
        <ScrollView contentContainerStyle={styles.scroll_container}>
        <View style={styles.view_container}>
        <TextInput
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
          placeholder="Email"
          placeholderTextColor={"#898989"}
          autoComplete={ Platform.OS === 'web' ? 'none' : 'off' }
        />
        <TextInput
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          placeholder="Şifre"
          placeholderTextColor={"#898989"}
          autoComplete={ Platform.OS === 'web' ? 'none' : 'off' }
        />
        <TextInput
          secureTextEntry={true}
          onChangeText={(text) => setPasswordConfirm(text)}
          style={styles.input}
          placeholder="Şifre"
          placeholderTextColor={"#898989"}
          autoComplete={ Platform.OS === 'web' ? 'none' : 'off' }
        />
        <TextInput
          onChangeText={(text) => setName(text)}
          style={styles.input}
          placeholder="Ad Soyad"
          placeholderTextColor={"#898989"}
          autoComplete={ Platform.OS === 'web' ? 'none' : 'off' }
        />
        <TouchableOpacity
          onPress={handleCreateAccount}
          style={styles.button_container}
        >
          <Text style={{ color: "white" }}>Kayıt Ol</Text>
        </TouchableOpacity>
        </View>
      </ScrollView>
      </KeyboardAvoidingView>
  );
};
export default SignUp;
