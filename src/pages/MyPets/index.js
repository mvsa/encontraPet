import React from 'react';
import {Text, View} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';

import styles from './styles';


export default function MyPets(){
    return(
        <>
        
        <View style = {styles.container}> 
            <FontAwesome name="angle-left" color="#FFF" size={35}  />
            <Text style = {styles.text}>Meus Pets</Text>
        </View>

        <View style={styles.containerp}>
            <View style={styles.titleArea}>
                <Text style={styles.title}>
                    Pets cadastrados
                </Text>
            </View>

            <View style={{
            borderBottomColor: '#808080',
            borderBottomWidth: 1,
            width:300,
            alignSelf:'center',
          }}/>

          <View style={styles.petList}>
            <Text style={styles.petListText}>
                Nenhum pet cadastrado até o momento
            </Text>
            <FontAwesome name="close" color="#F96232" size={35}  />
          </View>

        </View>

        </>
    )
}