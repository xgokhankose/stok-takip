import {
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Image,
} from "react-native";
import React from "react";
import styles from "./ViewProductCard.style";
import { useNavigation } from "@react-navigation/native";
const ViewProductCard = ({ product, onSelect }) => {
  
  const navigation = useNavigation()

  const fullScreenImage = () => {
    navigation.navigate("ViewImagePage", { url: product.productPicture });
  };

  if (!product.isActive) {
    return;
  }
  var date = new Date(product.createdAt.seconds * 1000);
  var dataMonth = date.getMonth();
  var dataDay = date.getDate();
  var dataYear = date.getFullYear();
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.inner_container}>
          <TouchableOpacity onPress={fullScreenImage}>
            <Image
              style={styles.image}
              source={{ uri: product.productPicture }}
            />
          </TouchableOpacity>

          <View style={styles.inner_data_container}>
            <View style={styles.inner_container_light}>
              <View style={styles.text_container}>
                <Text style={styles.text}>Ürün Türü:</Text>
              </View>
              <Text style={styles.textData}>{product.productCategory}</Text>
            </View>

            <View style={styles.inner_container_light}>
              <View style={styles.text_container}>
                <Text style={styles.text}>Ürün İsmi:</Text>
              </View>
              <Text numberOfLines={2} style={styles.textData}>
                {product.productName}
              </Text>
            </View>
            <View style={styles.description_container}>
              <View style={styles.text_container_description}>
                <Text style={styles.text}>Ürün Açıklaması:</Text>
              </View>
              <View style={styles.description_inner_container}>
                <Text numberOfLines={5} style={styles.textData}>
                  {product.productDescription}
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.bottom_container}>
          <Text style={styles.bottom_container_text}>
            {product.addPerson} tarafından {dataDay}.{dataMonth + 1}.{dataYear}{" "}
            tarihinde eklendi
          </Text>
          <View style={styles.button_container}>
            <TouchableOpacity onPress={onSelect} style={styles.button_update}>
              <Text style={styles.button_text}>Düzenle</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
export default ViewProductCard;
