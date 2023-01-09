import { View, Text, TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./ViewProductCategoryCard.style";
import { doc, setDoc } from "firebase/firestore/lite";
import { db } from "../../firebase-config";

const ViewProductCategoryCard = ({ category }) => {
  const navigation = useNavigation();
  const categoryDelete = () =>
    Alert.alert("Silmek istediğinize emin misiniz ?", "", [
      {
        text: "Hayır",
      },
      { text: "Evet", onPress: deleteData },
    ]);

  const deleteData = async () => {
    const ref = doc(db, "productCategory", category.id);
    await setDoc(ref, {
      isActive: false,
      name: category.name,
    })
      .then(Alert.alert("Ürün Kategorisi Başarıyla Silindi."))
      .then(navigation.navigate("HomePage"));
  };
  return (
    <View style={styles.container}>
      <View style={styles.text_view}>
        <Text style={styles.text}>{category.name}</Text>
      </View>
      <TouchableOpacity onPress={categoryDelete} style={styles.button}>
        <Text style={styles.button_text}>Sil</Text>
      </TouchableOpacity>
    </View>
  );
};
export default ViewProductCategoryCard;
