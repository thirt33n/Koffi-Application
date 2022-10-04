import React,{ useState,useEffect } from 'react';
import { View,Button,TouchableOpacity,StyleSheet,Text } from 'react-native';


export default function Button2(){
        
        return(
           <View>
            <TouchableOpacity
            style={styles.button}
      >
        <Text style={{color:'#b17538',fontSize:20}}>Place your order!</Text>
      </TouchableOpacity>
           </View>
        )

}


const styles = StyleSheet.create({
    button:{
        backgroundColor:'#271609',
        color:'#b17538',
        alignItems:'center',
        padding:10,
        width:200,
        height:'12%',
        marginLeft:'22%',
        marginTop:'10%',
        borderRadius:20
       
    }
});