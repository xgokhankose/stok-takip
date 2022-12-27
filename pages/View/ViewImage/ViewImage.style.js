import { StyleSheet,Dimensions } from 'react-native'

const device = Dimensions.get("window")
export default StyleSheet.create({
    image:{
        width:device.width,
        height:device.height
    }
})