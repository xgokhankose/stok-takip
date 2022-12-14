import SignUp from "../../pages/Login";
import Login from "../../pages/Login";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: "#262626" },
        headerTitleStyle: { color: "white" },
        title: "",
      }}
    >
      <Stack.Screen name="LoginPage" component={Login} />
      <Stack.Screen name="SignUpPage" component={SignUp} />
    </Stack.Navigator>
  );
};
export default AuthStack;
