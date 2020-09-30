import React from 'react';
import {View, Text, TouchableOpacity, SafeAreaView, StatusBar,Image, TextInput} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';
import {Input} from 'react-native-elements';

import styles from './styles';

export default function Login({navigation}){
    return(
        <>
            <StatusBar barStyle="light-content" backgroundColor="#F96232"/>
        
            <SafeAreaView style = {styles.container}>

            <View style = {styles.header}>
                <FontAwesome  name="paw" size={94} style={{ backgroundColor: "#F96232",
                color: 'white' }} />
                <Text style={styles.title}>
                    EncontraPet
                </Text>
            </View>


            <View>    
                <Input style = {styles.input}
                inputContainerStyle={{borderBottomWidth:0}}
                placeholder='Email' placeholderTextColor="#FFF" 
                leftIcon={{ type: 'font-awesome', name: 'envelope-o',  color: '#f5f5f5'}}
                />
                 <Input style = {styles.input}
                 inputContainerStyle={{borderBottomWidth:0}}
                placeholder='Senha' placeholderTextColor="#FFF" 
                leftIcon={{ type: 'font-awesome', name: 'lock',  color: 'white', size: 35}}
                />
                <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Home')}>
                        <Text style = {styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.actions}>
                <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Register')}>
                            <Text style = {styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('RetrievePassword')}>
                            <Text style = {styles.buttonText}>Recuperar senha</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.lowerAction}> 
            <TouchableOpacity  >
                            <Text style = {styles.buttonText}>Sou uma empresa ou ONG</Text>
            </TouchableOpacity>
            </View>


            </SafeAreaView>
        </>
    )
} 