import { StyleSheet, Dimensions } from "react-native";
const deviceSize = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#262626",
  },
  date_button: {
    width: 150,
    height: 50,
    backgroundColor: "#3F3B6C",
    padding: 5,
    margin: 5,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "white",
  },
  button_container: {
    flexDirection: "row",
    justifyContent: "center",
  },
  button_text: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
  },
  list_container: {
    height: 15,
  },
  selectlist_input: {
    height: 22,
    width: deviceSize.width - 150,
    color: "white",
    fontSize: 18,
  },
  selectlist_dropdown: {
    height: 150,
    width: deviceSize.width*7/10,
    backgroundColor: "#373737",
  },
  selectlist_box: {
    width: deviceSize.width*7/10,
    
  },
  selectlist_container: {
    flexDirection: "row",
    justifyContent:"center",
    paddingTop:5
  },
  filter_button:{
    width: deviceSize.width*1.5/10,
    height: 48,
    backgroundColor: "#38BA7D",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginLeft:4,
  },
  seleclist_button_text:{
    color:"white",
    fontSize:17,
    fontWeight:"bold"
  },
});
