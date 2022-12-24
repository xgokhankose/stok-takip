import { StyleSheet, Dimensions } from "react-native";
const deviceSize = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#262626",
    justifyContent: "center",
    alignItems: "center",
    
  },
  scroll_container: {
    alignItems: "center",
    justifyContent: "center",
    flexGrow:1
  },
  view_container: {
    alignItems: "center",
    justifyContent: "center",
    width: deviceSize.width,
    height: (deviceSize.height * 8) / 10,
  },
  input: {
    height: 50,
    width: deviceSize.width - 80,
    margin: 10,
    backgroundColor: "#373737",
    padding: 15,
    borderRadius: 10,
    color: "white",
  },
  button_container: {
    backgroundColor: "#15ce3e",
    height: 50,
    width: deviceSize.width - 80,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 10,
  },
  inner_container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor:"#262626"
  },
});
