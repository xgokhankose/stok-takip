import { StyleSheet } from "react-native";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState, useEffect } from "react";
import { getAuth } from "firebase/auth";

import ProductCategory from "./pages/Add/ProductCategory";
import Product from "./pages/Add/Product";
import Request from "./pages/Add/Request";
import RequestEdit from "./pages/Edit/RequestEdit";
import ProductEdit from "./pages/Edit/ProductEdit";
import ViewRequest from "./pages/View/ViewRequest";
import ViewProduct from "./pages/View/ViewProduct";

const Stack = createNativeStackNavigator();

export default function App() {

  const AuthStack = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: true }}>
        <Stack.Screen
          name="LoginPage"
          component={Login}
          options={{
            title: "",
            headerStyle: { backgroundColor: "#262626" },
            headerTitleStyle: { color: "white" },
          }}
        />
        <Stack.Screen
          name="SignUpPage"
          component={SignUp}
          options={{
            title: "",
            headerStyle: { backgroundColor: "#262626" },
            headerTitleStyle: { color: "white" },
            headerTintColor: "white",
          }}
        />
      </Stack.Navigator>
    );
  };
  const HomeStack = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: true }}>
        <Stack.Screen
          name="HomePage"
          component={Home}
          options={{
            title: "ANASAYFA",
            headerTitleStyle: { color: "white" },
            headerTintColor: "white",
            headerStyle: { backgroundColor: "#262626" },
          }}
        />
        <Stack.Screen
          name="ViewRequestPage"
          component={ViewRequest}
          options={{
            title: "TALEPLER",
            headerStyle: { backgroundColor: "#262626" },
            headerTitleStyle: { color: "white" },
            headerTintColor: "white",
          }}
        />

        <Stack.Screen
          name="ProductCategoryPage"
          component={ProductCategory}
          options={{
            title: "TALEP KATEGORİSİ EKLE",
            headerStyle: { backgroundColor: "#262626" },
            headerTitleStyle: { color: "white" },
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name="ViewProduct"
          component={ViewProduct}
          options={{
            title: "ÜRÜNLER",
            headerStyle: { backgroundColor: "#262626" },
            headerTitleStyle: { color: "white" },
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name="ProductPage"
          component={Product}
          options={{
            title: "ÜRÜN EKLE",
            headerStyle: { backgroundColor: "#262626" },
            headerTitleStyle: { color: "white" },
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name="ProductEditPage"
          component={ProductEdit}
          options={{
            title: "ÜRÜN DÜZENLE",
            headerStyle: { backgroundColor: "#262626" },
            headerTitleStyle: { color: "white" },
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name="RequestPage"
          component={Request}
          options={{
            title: "TALEP EKLE",
            headerStyle: { backgroundColor: "#262626" },
            headerTitleStyle: { color: "white" },
            headerTintColor: "white",
          }}
        />
        <Stack.Screen
          name="RequestEditPage"
          component={RequestEdit}
          options={{
            title: "TALEP DÜZENLE",
            headerStyle: { backgroundColor: "#262626" },
            headerTitleStyle: { color: "white" },
            headerTintColor: "white",
          }}
        />
      </Stack.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
          {/* <Stack.Screen
            name="AuthStack"
            component={AuthStack}
            options={{ headerShown: false }}
          /> */}
       
          <Stack.Screen
            name="HomeStack"
            component={HomeStack}
            options={{ headerShown: false }}
          />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
