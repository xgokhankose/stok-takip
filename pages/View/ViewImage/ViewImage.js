import React from "react";
import { Image, View ,Text} from "react-native";
import styles from "./ViewImage.style"

const ViewImage = (props) => {
  console.log(props.route.params.url);
  return (
    <View>
    <Image style={styles.image} source={{uri:props.route.params.url}}/>
      <Text>MERHABA</Text>
    </View>
  );
};
export default ViewImage;
