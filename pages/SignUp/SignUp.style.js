import { StyleSheet ,Dimensions} from 'react-native'
const deviceSize = Dimensions.get("window");

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#262626",
        justifyContent:"center",
        alignItems:"center"
    },
    input:{
        height:50,
        width:deviceSize.width-80,
        margin:10,
        backgroundColor:"#373737",
        padding:15,
        borderRadius:10,
    },
    button_container:{
        backgroundColor:"#15ce3e",
        height:50,
        width:deviceSize.width-80,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10,
        marginTop:10
    }
})