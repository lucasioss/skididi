import { StyleSheet, Text, View, Image} from 'react-native'
import React, { useEffect } from 'react'

const SplashScreen = ({navigation}) => {
    useEffect (()=>{
        setTimeout(() => {
            navigation.replace('Login')
        },5000);
        
    })
  return (
    <View style={styles.container}>
        <Image source={require('../assets/Sisambi.png')} style={styles.logo}/>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    logo:{
        width:100,
        height:100,
    }
})