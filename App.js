import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import AuthStack from "./navigation/AuthStack";
import HomeStack from "./navigation/HomeStack";

export default function App() {
  const [isLogin, setIsLogin] = useState();

  useEffect(() => {
    getAuth().onAuthStateChanged((user) => {
      setIsLogin(!!user);
    });
  }, []);

  return (
    <NavigationContainer>
      {!isLogin ? <AuthStack /> : <HomeStack />}
    </NavigationContainer>
  );
}
