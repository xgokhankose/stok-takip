import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";
import AuthStack from "./navigation/AuthStack";
import HomeStack from "./navigation/HomeStack";

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLogin, setIsLogin] = useState();

  useEffect(() => {
    getAuth().onAuthStateChanged((user) => {
      setIsLogin(!!user);
    });
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!isLogin ? <AuthStack /> : <HomeStack />}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

