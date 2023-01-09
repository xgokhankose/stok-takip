import { View, Text, FlatList, TouchableOpacity } from "react-native";
import styles from "./ViewProductCategory.style"
import useGetData from "../../../hooks/useGetData";
import ViewProductCategoryCard from "../../../components/ViewProductCategoryCard";
import Loading from "../../../components/Loading";
const ViewProductCategory = () => {
    const { data, loading } = useGetData("productCategory");
    
    const renderViewProductCategory = ({item}) =>{
        return <ViewProductCategoryCard category={item}/>
    }
   if(loading){
    return <Loading/>
   }
  return (
    <View style={styles.container}>
      <FlatList data={data} ListEmptyComponent={<Text>Kategori yok.</Text>} renderItem={renderViewProductCategory} />
      
    </View>
  );
};
export default ViewProductCategory;
