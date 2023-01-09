import { StyleSheet } from "react-native";
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#262626",
    justifyContent: "center",
    alignItems:"center"
  },
  inner_container: {
    margin: 20,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  add_button: {
    width: 300,
    height: 40,
    backgroundColor: "#38BA7D",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    margin:10,
  },
  view_button: {
    width: 300,
    height: 40,
    backgroundColor: "#624F82",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    margin:10,
    
  },
  add_button_text: {
    fontSize: 23,
    color: "white",
    fontWeight:"bold"
  },
  exit_button:{
    width: 300,
    height: 40,
    backgroundColor: "#E44641",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    margin:10,
  }
});
