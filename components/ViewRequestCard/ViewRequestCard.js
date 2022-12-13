/* import {
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Image,
} from "react-native";
import React from "react";
import styles from "./ViewRequestCard.style";
const ViewRequestCard = ({ request, onSelect }) => {
  if (!request.isActive) {
    return;
  }

  return (
    <View>
      <View style={styles.container}>
        <View style={styles.inner_container}>
          <Image
            style={styles.image}
            source={{ uri: request.productPicture }}
          />

          <View style={styles.inner_data_container}>
            <View style={styles.inner_container_light}>
              <View style={styles.text_container}>
                <Text style={styles.text}>Ürün Türü:</Text>
              </View>
              <Text style={styles.textData}>{request.productCategory}</Text>
            </View>

            <View style={styles.inner_container_light}>
              <View style={styles.text_container}>
                <Text style={styles.text}>Ürün İsmi:</Text>
              </View>
              <Text style={styles.textData}>{request.productName}</Text>
            </View>
            <View style={styles.description_container}>
              <View style={styles.text_container_description}>
                <Text style={styles.text}>Ürün Açıklaması:</Text>
              </View>
              <View style={styles.description_inner_container}>
                <Text style={styles.textData}>
                  {request.productDescription}
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.bottom_container}>
          <Text style={{ textAlign: "left", color: "#F0FF42" }}>
            {request.addPerson} tarafından {request.createdAt} tarihinde eklendi
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
export default ViewRequestCard;
 */

import {
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";
import styles from "./ViewRequestCard.style";
const ViewRequestCard = ({ request, onSelect }) => {
  if (!request.isActive) {
    return;
  }
 var date = new Date(request.createdAt.seconds*1000)
 var dataMonth= date.getMonth()
 var dataDay= date.getDate()
 var dataYear=date.getFullYear()
 


  return (
    <View>
      <View style={styles.container}>
        <View style={styles.inner_container_light}>
          <View style={styles.text_container}>
            <Text style={styles.text}>Ürün Türü:</Text>
          </View>
          <Text style={styles.textData}>{request.productCategory}</Text>
        </View>
        <View style={styles.inner_container_dark}>
          <View style={styles.text_container}>
            <Text style={styles.text}>Ürün İsmi:</Text>
          </View>
          <Text style={styles.textData}>{request.productName}</Text>
        </View>

        <View style={styles.inner_container_light}>
          <View style={styles.text_container}>
            <Text style={styles.text}>Müşteri İsmi:</Text>
          </View>

          <Text style={styles.textData}>{request.customerName}</Text>
        </View>
        <View style={styles.inner_container_dark}>
          <View style={styles.text_container}>
            <Text style={styles.text}>Müşteri Numarası:</Text>
          </View>

          <Text style={styles.textData}>{request.customerPhone}</Text>
        </View>
        <View style={styles.description_container}>
          <View style={styles.text_container}>
            <Text style={styles.text}>Ürün Açıklaması:</Text>
          </View>
          <View style={styles.description_inner_container}>
            <Text style={styles.textData}>{request.productDescription}</Text>
          </View>
        </View>
        <View style={styles.bottom_container}>
          <Text style={{ textAlign: "left", color: "#F0FF42" , maxWidth:310 }}>
            {request.addPerson} tarafından {dataDay}.{dataMonth+1}.{dataYear} tarihinde eklendi
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
export default ViewRequestCard;
