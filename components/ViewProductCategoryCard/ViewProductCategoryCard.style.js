import { StyleSheet,Dimensions } from 'react-native'
const device = Dimensions.get("window");

export default StyleSheet.create({
    container:{
        backgroundColor:"#624F82",
        margin:6,
        marginLeft:15,
        padding:5,
        width:device.width*7.5/10,
        height:30,
        borderRadius:5,
        flexDirection:"row",

        alignItems:"center"
        
    },
    text:{
        color:"white",
        fontSize:18,
        
    },
    text_view:{
        width:device.width*0.6,
    },
    button:{
        marginLeft:device.width*1.6/10,
        backgroundColor:"#E44641",
        width:device.width*0.15,
        height:30,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:5
    },
    button_text:{
        color:"white"
    }
})