import { StyleSheet, Dimensions } from "react-native";
const deviceSize = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#262626",
  },
  date_button: {
    width: deviceSize.width * 0.4,
    height: 50,
    backgroundColor: "#DADDD8",
    padding: 5,
    margin: 5,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center",
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
    color: "black",
  },
  list_container: {
    height: 15,
  },
  selectlist_container: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 5,
  },
  filter_button_green: {
    width: (deviceSize.width * 1.5) / 10,
    height: 48,
    backgroundColor: "#38BA7D",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginLeft: 4,
  },
  filter_button_red: {
    width: (deviceSize.width * 1.5) / 10,
    height: 48,
    backgroundColor: "#E44641",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginLeft: 4,
  },
  seleclist_button_text: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
  },
  dropdown_menu: {
    width: (deviceSize.width * 6) / 10,
    height: 48,
    backgroundColor: "#262626",
    borderWidth: 3,
    borderColor: "green",
    borderRadius: 10,
  },
  rowlist: {
    width: (deviceSize.width * 6) / 10,
  },
  allstyles: {
    selectedItemText: {
      color: "green",
    },

    selectToggle: {
      width: deviceSize.width * 0.5,
      backgroundColor: "#DADDD8",
      height: 48,
      borderRadius: 3,
      alignItems: "center",
      justifyContent: "center",
      paddingTop:10
    },
    selectToggleText: { textAlign: "center" },
  },
});
