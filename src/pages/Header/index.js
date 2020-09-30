import React from 'react';
import {View, Text,Image,} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';

import styles from './styles';

export default function Header(){
    return(
        <View style = {styles.container}> 
            <FontAwesome name="paw" color="#FFF" size={35}  />
            <Text style = {styles.text}>EncontraPet</Text>
        </View>
        
    )   
}