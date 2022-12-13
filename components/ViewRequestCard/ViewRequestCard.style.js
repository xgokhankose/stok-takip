

import { StyleSheet, Dimensions } from "react-native";
const device = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    margin: 10,
    backgroundColor: "#3F3B6C",
    borderRadius: 15,
  },
  textData: {
    fontSize: 18,
    color: "white",
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  inner_container_light: {
    backgroundColor: "#624F82",
    flexDirection: "row",
    borderRadius: 5,
    margin: 1,
    padding: 4,
  },
  inner_container_dark: {
    flexDirection: "row",
    borderRadius: 5,
    borderRadius: 5,
    margin: 1,
    padding: 4,
  },
  text_container: {
    width: 150,
  },
  description_container: {
    backgroundColor: "#624F82",
    flexDirection: "row",
    height: 50,
    borderRadius: 5,
    margin: 1,
    padding: 4,
  },
  description_inner_container: {
    width: 230,
  },
  bottom_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 3,
    alignItems: "center",
    
  },
  button_update: {
    width: 60,
    height: 30,
    backgroundColor: "#38BA7D",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  button_delete: {
    width: 60,
    height: 30,
    backgroundColor: "#F34541",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginRight:5
  },
  button_text:{
    color:"white",
    fontSize:15,
    fontWeight:"bold"
  },
  button_container:{
    flexDirection:"row",
  },
});