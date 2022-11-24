import React from "react";
import { Button, SafeAreaView, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./Login.style"

const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TextInput style={styles.input}  placeholder="Email" placeholderTextColor={'#898989'}/>
      <TextInput style={styles.input}  placeholder="Şifre" placeholderTextColor={'#898989'}/>
      
      <TouchableOpacity style={styles.button_container}>
        <Text style={{color:"white"}}>Giriş Yap</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signup_button}>
        <Text style={{color:"white"}}>Hesap Oluştur</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}; 
export default Login;
