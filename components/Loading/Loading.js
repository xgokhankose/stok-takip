import React from 'react'
import Lottie from 'lottie-react-native';


const Loading = () =>{
    return (
        <Lottie
        style={{backgroundColor:"#262626"}}
        source={require('../../assets/loading.json')}
        autoPlay
      />
    )
}

export default Loading