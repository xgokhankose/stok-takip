import React from "react";
import { Image, View, Text } from "react-native";
import styles from "./ViewImage.style";

const ViewImage = (props) => {
  return (
    <View>
      <Image style={styles.image} source={{ uri: props.route.params.url }} />
    </View>
  );
};
export default ViewImage;
