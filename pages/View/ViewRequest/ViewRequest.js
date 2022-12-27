import { useEffect, useState } from "react";
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ViewRequestCard from "../../../components/ViewRequestCard";
import useGetData from "../../../hooks/useGetData";
import styles from "./ViewRequest.style";
import { MultipleSelectList } from "react-native-dropdown-select-list";
import Loading from "../../../components/Loading";

const ViewRequest = (props) => {
  const { data, loading } = useGetData("requests");

  const [requestData, setRequestData] = useState("");
  const [refresh, setRefresh] = useState("");
  const [selected, setSelected] = useState([]);

  const categoryData = useGetData("productCategory");
  const categoryArray = categoryData.data;

  const handleRequestSelect = (id) => {
    props.navigation.navigate("RequestEditPage", { id });
  };

  const newFirst = () => {
    setRequestData(
      requestData.sort((a, b) => {
        if (a.createdAt.seconds > b.createdAt.seconds) {
          return -1;
        }
      })
    );
    setRefresh("2");
  };

  const oldFirst = () => {
    setRequestData(
      requestData.sort((a, b) => {
        if (a.createdAt.seconds < b.createdAt.seconds) {
          return -1;
        }
      })
    );
    setRefresh("3");
  };

  const renderViewRequest = ({ item }) => {
    return (
      <ViewRequestCard
        onSelect={() => handleRequestSelect(item.id)}
        request={item}
      />
    );
  };

  const filterByCategory = () => {
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
  
  if (loading) {
    return <Loading />;
  }
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={requestData}
        ListEmptyComponent={
          <Text style={{ color: "white" }}>Bekleyen bir istek yok.</Text>
        }
        renderItem={renderViewRequest}
        keyExtractor={(item) => item.id.toString()}
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
                checkBoxStyles={{ backgroundColor: "white" }}
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

export default ViewRequest;
