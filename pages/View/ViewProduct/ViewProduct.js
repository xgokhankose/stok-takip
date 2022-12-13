import { useEffect, useState } from "react";
import {
  FlatList,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import Loading from "../../../components/Loading";
import ViewProductCard from "../../../components/ViewProductCard";
import useGetData from "../../../hooks/useGetData";
import styles from "./ViewProduct.style";
import { MultipleSelectList } from "react-native-dropdown-select-list";

const ViewProduct = (props) => {
  const { data, loading } = useGetData("products");

  const [requestData, setRequestData] = useState("");
  const [refresh, setRefresh] = useState("");
  const [selected, setSelected] = useState([]);

  const categoryData = useGetData("productCategory");
  const categoryArray = categoryData.data;

  const handleProductSelect = (id) => {
    props.navigation.navigate("ProductEditPage", { id });
  };

  const newFirst = () => {
    setRequestData(
      data.sort((a, b) => {
        if (a.createdAt.seconds > b.createdAt.seconds) {
          return -1;
        }
      })
    );
    setRefresh("2");
  
  };

  const oldFirst = () => {
    setRequestData(
      data.sort((a, b) => {
        if (a.createdAt.seconds < b.createdAt.seconds) {
          return -1;
        }
      })
    );
    setRefresh("3");
  };

  const renderViewProduct = ({ item }) => {
    return (
      <ViewProductCard
        onSelect={() => handleProductSelect(item.id)}
        product={item}
      />
    );
  };
  const filterByCategory = () => {
    console.log("girdi1")
    var tempData = [];
    if (selected.length > 0) {
      for (let a = 0; a < data.length; a++) {
        for (let b = 0; b < selected.length; b++) {
          if (data[a].productCategory == selected[b]) {
            tempData.push(data[a]);
          }
        }
      }
      setRequestData(tempData);
      setRefresh("4");
    } else {
      setRequestData(data);
      setRefresh("5");
    }
  };

  useEffect(() => {
    setRequestData(data);
  }, [data]);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={requestData}
        ListEmptyComponent={<Text>Bekleyen bir istek yok.</Text>}
        renderItem={renderViewProduct}
        extraData={refresh}
        ListHeaderComponent={
          <View>
            <View style={styles.button_container}>
              <TouchableOpacity style={styles.date_button} onPress={newFirst}>
                <Text style={styles.button_text}>
                  Tarihe göre sırala{"\n"}(Önce en yeni talep)
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.date_button} onPress={oldFirst}>
                <Text style={styles.button_text}>
                  Tarihe göre sırala{"\n"}(Önce en eski talep)
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.selectlist_container}>
              <MultipleSelectList
                setSelected={(val) => setSelected(val)}
                data={categoryArray.map((item, index) => ({
                  key: index,
                  value: item.name,
                }))}
                save="value"
                label="Seçilen kategoriler:"
                inputStyles={styles.selectlist_input}
                dropdownStyles={styles.selectlist_dropdown}
                dropdownTextStyles={{ color: "white", fontSize: 18 }}
                boxStyles={styles.selectlist_box}
                labelStyles={{ color: "white" }}
              />
              <TouchableOpacity
                style={styles.filter_button}
                onPress={filterByCategory}
              >
                <Text style={styles.seleclist_button_text}>Filtrele</Text>
              </TouchableOpacity>
            </View>
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default ViewProduct;
