import React from 'react';
import {View, Text,Image} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';

import styles from './styles';

export default function MyHistory(){
    return(
        <>
        <View style = {styles.container}> 
            <FontAwesome name="angle-left" color="#FFF" size={35}  />
            <Text style = {styles.text}>Histórico</Text>
        </View>

        <View style = {styles.containerh}>
            <View style={styles.titleArea}>
                    <Text style={styles.title}>
                        Histórico de interações
                    </Text>
             </View>

            <View style={{
                borderBottomColor: '#808080',
                borderBottomWidth: 1,
                width:300,
                alignSelf:'center',
            }}/>

            <View style={styles.interactionList}>
                <View style={styles.interactionCard}>
                    <View style={styles.innerInteractionCard}>
                        <Image style={styles.animalPhoto} source={require('../../assets/dog2.jpg')}></Image>
                        <View style={styles.animalData}>
                            <Text style={styles.animal}>Dog, #Macho, #Vacinado</Text>
                            <Text>18/09/2020 às 12:30:54</Text>
                            <Text>Quero adotar</Text>
                        </View>
                    </View>
                    <View style={{
                    borderBottomColor: '#808080',
                    borderBottomWidth: 1,
                    width:350,
                    alignSelf:'center',
                    }}/>

                </View>
                <View style={styles.interactionCard}>
                    <View style={styles.innerInteractionCard}>
                        <Image style={styles.animalPhoto} source={require('../../assets/dog3.jpg')}></Image>
                        <View style={styles.animalData}>
                            <Text style={styles.animal}>Rex, #Macho, #Vermifugado</Text>
                            <Text>20/09/2020 às 12:30:54</Text>
                            <Text>Coloquei para adoção</Text>
                        </View>
                    </View>
                    <View style={{
                    borderBottomColor: '#808080',
                    borderBottomWidth: 1,
                    width:350,
                    alignSelf:'center',
                    }}/>

                </View>

            </View>

        </View>
        </>
    )
}