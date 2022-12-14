import Home from "../../pages/Home";
import ProductCategory from "./pages/Add/ProductCategory";
import Product from "./pages/Add/Product";
import Request from "./pages/Add/Request";
import RequestEdit from "./pages/Edit/RequestEdit";
import ProductEdit from "./pages/Edit/ProductEdit";
import ViewRequest from "./pages/View/ViewRequest";
import ViewProduct from "./pages/View/ViewProduct";

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerTitleStyle: { color: "white" },
        headerTintColor: "white",
        headerStyle: { backgroundColor: "#262626" },
      }}
    >
      <Stack.Screen
        name="HomePage"
        component={Home}
        options={{
          title: "ANASAYFA",
        }}
      />
      <Stack.Screen
        name="ViewRequestPage"
        component={ViewRequest}
        options={{
          title: "TALEPLER",
        }}
      />
      <Stack.Screen
        name="ProductCategoryPage"
        component={ProductCategory}
        options={{
          title: "TALEP KATEGORİSİ EKLE",
        }}
      />
      <Stack.Screen
        name="ViewProduct"
        component={ViewProduct}
        options={{
          title: "ÜRÜNLER",
        }}
      />
      <Stack.Screen
        name="ProductPage"
        component={Product}
        options={{
          title: "ÜRÜN EKLE",
        }}
      />
      <Stack.Screen
        name="ProductEditPage"
        component={ProductEdit}
        options={{
          title: "ÜRÜN DÜZENLE",
        }}
      />
      <Stack.Screen
        name="RequestPage"
        component={Request}
        options={{
          title: "TALEP EKLE",
        }}
      />
      <Stack.Screen
        name="RequestEditPage"
        component={RequestEdit}
        options={{
          title: "TALEP DÜZENLE",
        }}
      />
    </Stack.Navigator>
  );
};
export default HomeStack;
