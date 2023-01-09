import SignUp from "../../pages/SignUp";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "../../pages/SignIn";

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
      <Stack.Screen name="LoginPage" component={SignIn} />
      <Stack.Screen name="SignUpPage" component={SignUp} />
    </Stack.Navigator>
  );
};
export default AuthStack;
