import React,{ useState,useEffect } from 'react';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 



export default function Button(){
        
        
    const  [color,setColor] = useState('black');
    const [icon,setIcon] = useState('bookmark-o')
    function changeColor(){
        if(color == 'black'){
            setColor('#C40233');
            setIcon('bookmark');
        }
        else{    
            setIcon('bookmark-o');
            setColor('black');
        }
        }
        return(
            <View>
                <FontAwesome style={{marginLeft:'2%'}} name={icon} size={30} color={color} onPress={changeColor} />
            </View>
        )

}