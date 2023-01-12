

import { StyleSheet, Dimensions } from "react-native";
const device = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    margin: 10,
    backgroundColor: "#DADDD8",
    borderRadius: 6,
  },
  textData: {
    fontSize: 18,
    color: "black",
    maxWidth:device.width*5/10
  },
  text: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    
  },
  inner_container_light: {
    backgroundColor: "#EEF0F2",
    flexDirection: "row",
    borderRadius: 3,
    margin: 1,
    padding: 4,
  },
  inner_container_dark: {
    flexDirection: "row",
    borderRadius: 3,
    margin: 1,
    padding: 4,
  },
  text_container: {
    width: device.width*3/10
  },
  description_container: {
    backgroundColor: "#EEF0F2",
    flexDirection: "row",
    height: 100,
    borderRadius: 3,
    margin: 1,
    padding: 4,
  },
  description_inner_container: {
    maxWidth:device.width*5/10
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
  bottom_container_text: {
    textAlign: "left",
    color: "green",
    maxWidth: device.width*7/10,
  },
});
