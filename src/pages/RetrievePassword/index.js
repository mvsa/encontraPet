import React from 'react';
import {View, Text, TouchableOpacity, SafeAreaView, StatusBar,Image, TextInput} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';
import {Input} from 'react-native-elements';

import styles from './styles';

export default function RetrievePassword({navigation}){
    return(

        <View style={styles.container}>
            <View style={styles.header}>
                <FontAwesome  name="paw" size={94} style={{ backgroundColor: "#F96232",
                color: 'white' }} />
                <Text style = {styles.title}>
                            EncontraPet
                </Text>
                <Text style = {styles.subtitle}>INFORME SEU E-MAIL DE CADASTRO:</Text>
            </View> 

            <Input style = {styles.input}
                inputContainerStyle={{borderBottomWidth:0}}
                placeholder='Email' placeholderTextColor="#FFF" 
                leftIcon={{ type: 'font-awesome', name: 'envelope', size:20,  color: 'white'}}
            />

            <View style={styles.action}>            
                    <TouchableOpacity style={styles.button}>
                            <Text style = {styles.buttonText}>Recuperar</Text>
                    </TouchableOpacity>
            </View>

            <View>
            <TouchableOpacity style={styles.action} onPress={()=>navigation.navigate('Login')}  >
                            <Text style={styles.return}>Voltar para o início</Text>
            </TouchableOpacity>
            </View>

        </View>
        
    )
}
