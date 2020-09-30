import React from 'react';
import {View,Text, TouchableOpacity,Image} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';

import styles from './styles';
import MyPets from '../MyPets/index'
import {useNavigation} from '@react-navigation/native';

export default function Profile(){

  const navigation = useNavigation();

    return(
        <>
        <View style={styles.container}>
          <View style={styles.userArea}>
            <View style={styles.userID}>
              <Image style={styles.userPhoto} source={require('../../assets/ryan.jpg')}></Image>
              <View style={styles.user}>
                <Text  style={styles.userName}>Ryan da Silva</Text>
                <TouchableOpacity style={styles.menuButtom} >
                  <Text style={styles.userData}> Meus dados  </Text>
                  <FontAwesome name="pencil" color="#FFF" size={20}  />
                </TouchableOpacity>
              </View>
            </View>

          </View>

          <View style={{
                    borderBottomColor: '#808080',
                    borderBottomWidth: 1,
                    width:300,
                    alignSelf:'center',
          }}/>

          <View style={styles.infoArea}>
            <TouchableOpacity style={styles.menuButtom}  onPress={()=>navigation.navigate('MyPets')}>
              <FontAwesome name="paw" color="#FFF" size={35}  />
              <Text style={styles.menuItem}>  Meus Pets</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuButtom} onPress={()=>navigation.navigate('MyHistory')}>
               <FontAwesome name="list-alt" color="#FFF" size={35}  />
              <Text style={styles.menuItem}>  Histórico</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.menuButtom}>
              <FontAwesome name="wechat" color="#FFF" size={35}  />
              <Text style={styles.menuItem}> Mensagens</Text>
            </TouchableOpacity>
          </View>
          <View style={{
                    borderBottomColor: '#808080',
                    borderBottomWidth: 1,
                    width:300,
                    alignSelf:'center',
          }}/>
          <View style={styles.extraArea}>
            <Text style={styles.menuItem}>Sobre a plataforma</Text>
          </View>
        </View>
        </>
    )
}