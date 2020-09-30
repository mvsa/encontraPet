import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';

import styles from './styles';
import Header from '../Header/index';

export default function PetView(){
    return(
        <>
        <Header/>
        <View style = {styles.container}>
            <View style = {styles.AnimalContainer}>
                <Image style= {styles.imgAnimal} 
                source={require('../../assets/dog.jpeg')} />
                <Text style = {styles.name}>
                    Dog
                </Text>
                <Text style = {styles.status}>
                    #Macho  #Vacinado  #Castrado  #Vermifugado
                </Text>
                <Text>
                    Filhote, encontrado na porta de casa, está bem cuidado e bem alimentado.
                </Text>
                <Text style = {styles.registerDate}>
                    Cadastrado em 14/02/2020
                </Text>
                <TouchableOpacity style = {styles.button}>
                    <Text style = {styles.buttonText}>
                        <FontAwesome name="heart" color="#FFF"  />
                        Tenho interesse
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
        </>
    )
}

