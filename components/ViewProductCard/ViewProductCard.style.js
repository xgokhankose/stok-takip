import { StyleSheet, Dimensions } from "react-native";
const device = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 4,
    margin: 10,
    backgroundColor: "#DADDD8",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  textData: {
    fontSize: 18,
    color: "black",
  },
  text: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
  inner_container_light: {
    backgroundColor: "#EEF0F2",
    flexDirection: "column",
    borderRadius: 3,
    margin: 5,
    padding: 4,
    width: device.width * (5 / 10),
  },

  text_container_description: {
    width: 230,
  },
  description_container: {
    backgroundColor: "#EEF0F2",
    flexDirection: "column",
    height: 180,
    borderRadius: 3,
    margin: 5,
    padding: 4,
    width: device.width * (5 / 10),
  },
  description_inner_container: {
    width: 200,
    height: 200,
  },
  bottom_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 3,
    alignItems: "center",

    width: (device.width * 85) / 100,
  },
  button_update: {
    width: 60,
    height: 30,
    backgroundColor: "#38BA7D",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
  },
  button_delete: {
    width: 60,
    height: 30,
    backgroundColor: "#F34541",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
    marginRight: 5,
  },
  button_text: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
  },
  button_container: {
    flexDirection: "row",
  },
  image: {
    width: (device.width * 3) / 10,
    height: (device.width * 64) / 90,
    borderRadius: 3,
    resizeMode: "cover",
  },
  inner_container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  inner_data_container: {
    flexDirection: "column",
  },
  bottom_container_text: {
    textAlign: "left",
    color: "green",
    maxWidth: (device.width * 7) / 10,
  },
});
