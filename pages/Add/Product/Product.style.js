import { StyleSheet, Dimensions } from "react-native";
const deviceSize = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#262626",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    height: 50,
    width: deviceSize.width - 80,
    margin: 15,
    backgroundColor: "#373737",
    padding: 15,
    borderRadius: 10,
    color:"white",
    fontSize:18
  },
  button_container: {
    backgroundColor: "#3C9C70",
    height: 50,
    width: deviceSize.width - 80,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 10,
  },
  signup_button: {
    margin: 40,
  },
  picker: {
    width: deviceSize.width - 80,
    height: 50,
    backgroundColor: "#373737",
    borderRadius:10,
  },
  selectList_input:{
    height:22,
    width: deviceSize.width - 140,
    color:"white",
    fontSize:18
  },
  selectList_dropdown:{
    height:150,
    width: deviceSize.width - 80,
    backgroundColor:"#373737"
  },
  input_description:{
    height: 100,
    width: deviceSize.width - 80,
    margin: 10,
    backgroundColor: "#373737",
    padding: 15,
    borderRadius: 10,
    color:"white",
    fontSize:18

  },button_text:{
    color:"white",
    fontSize:15,
    fontWeight:"bold"
  },
  necessary_text: {
    textAlign: "left",
    color: "white",
    width: deviceSize.width - 80,
  },
});
