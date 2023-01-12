import React, { useEffect, useState, useRef } from "react";
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Dimensions,
} from "react-native";
import ViewRequestCard from "../../../components/ViewRequestCard";
import useGetData from "../../../hooks/useGetData";
import styles from "./ViewRequest.style";
import Loading from "../../../components/Loading";
import Icon from "react-native-vector-icons/MaterialIcons";
import SectionedMultiSelect from "react-native-sectioned-multi-select";

const ViewRequest = (props) => {
  const deviceSize = Dimensions.get("window");

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
    var selectedData = [];
    if (selected.length > 0) {
      for (let a = 0; a < categoryArray.length; a++) {
        for (let b = 0; b < selected.length; b++) {
          if (categoryArray[a].id == selected[b]) {
            selectedData.push(categoryArray[a].name);
          }
        }
      }
    }
    var tempData = [];
    if (selectedData.length > 0) {
      for (let a = 0; a < data.length; a++) {
        for (let b = 0; b < selectedData.length; b++) {
          if (data[a].productCategory == selectedData[b]) {
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

  const resetFilter = () => {
    setSelected();
    setRequestData(data);
    setRefresh("6");
  };

  const multiSelectRef = useRef();

  useEffect(() => {
    setRequestData(data);
  }, [data]);

  if (loading) {
    return <Loading />;
  }
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        scrollEnabled={true}
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
                <Text style={styles.button_text}>Tarihe göre önce yeni</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.date_button} onPress={oldFirst}>
                <Text style={styles.button_text}>Tarihe göre önce eski</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.selectlist_container}>
              <SectionedMultiSelect
                hideTags
                IconRenderer={Icon}
                items={categoryArray}
                uniqueKey="id"
                onSelectedItemsChange={(val) => setSelected(val)}
                selectedItems={selected}
                ref={multiSelectRef}
                confirmText="Tamam"
                selectText="Kategori Seç"
                selectedText="Seçilen"
                searchPlaceholderText="Ara..."
                searchPlaceholderTextColor="red"
                itemBackground="#EADDCA"
                styles={styles.allstyles}
              />

              <TouchableOpacity
                style={styles.filter_button_green}
                onPress={filterByCategory}
              >
                <Text style={styles.seleclist_button_text}>Filtrele</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.filter_button_red}
                onPress={resetFilter}
              >
                <Text style={styles.seleclist_button_text}>Sıfırla</Text>
              </TouchableOpacity>
            </View>
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default ViewRequest;
