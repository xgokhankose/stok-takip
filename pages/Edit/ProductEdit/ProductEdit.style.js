import { StyleSheet, Dimensions } from "react-native";
const deviceSize = Dimensions.get("window");

export default StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor:"#262626",
    justifyContent: "center",
    alignItems: "center",
  },
  scroll_container: {
    alignItems: "center",
    justifyContent: "center",
    
    flexGrow: 1,
    paddingHorizontal:20,
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
    fontSize: 18,
  },
  button_container: {
    backgroundColor: "green",
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
    borderRadius: 10,
  },
  selectList_input: {
    height: 22,
    width: deviceSize.width - 140,
    color: "white",
    fontSize: 18,
  },
  selectList_dropdown: {
    height: 150,
    width: deviceSize.width - 80,
    backgroundColor: "#373737",
  },
  input_description: {
    height: 100,
    width: deviceSize.width - 80,

    margin: 10,
    backgroundColor: "#373737",
    padding: 15,
    borderRadius: 10,
    color: "white",
    fontSize: 18,
  },
  image: {
    width: 135,
    height: 240,
    resizeMode: "cover",
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 5,
  },
  button_container_green: {
    backgroundColor: "#3C9C70",
    height: 50,
    width: deviceSize.width - 80,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 10,
  },
  button_container_photo: {
    backgroundColor: "#262626",
    height: 50,
    width: deviceSize.width - 80,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 10,
  },
  button_container_red: {
    backgroundColor: "#E44641",
    height: 50,
    width: deviceSize.width - 80,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginTop: 10,
  },
  button_text: { color: "white", fontSize: 20 },
  button_text_photo: { color: "#52BAFA", fontSize: 20 },
});
