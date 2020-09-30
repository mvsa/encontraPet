import React,{useEffect,useState} from 'react';
import {View, Text, TouchableOpacity, SafeAreaView, StatusBar,Image, TextInput} from 'react-native';
import {FontAwesome} from '@expo/vector-icons';
import {Input} from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import {Picker} from 'react-native';

import styles from './styles';

export default function Register({navigation}){
    const [language,setlanguage] = useState('java');
    return(
        <>
        <StatusBar barStyle="light-content" backgroundColor="#F96232"/>
        <View style={styles.header}>
            <FontAwesome  name="paw" size={55} style={{ backgroundColor: "#F96232",
            color: 'white' }} />
            <Text style = {styles.title}>
                        EncontraPet
            </Text>
            <Text style = {styles.subtitle}>INFORME SEUS DADOS PARA CADASTRO</Text>
         </View> 

        <ScrollView style = {styles.container}>
            <View style={styles.inputArea}>   
            
                <Input style = {styles.input}
                inputContainerStyle={{borderBottomWidth:0}}
                placeholder='Nome' placeholderTextColor="#FFF" 
                leftIcon={{ type: 'font-awesome', name: 'user',  color: 'white'}}
                />
                <Input style = {styles.input}
                inputContainerStyle={{borderBottomWidth:0}}
                placeholder='Email' placeholderTextColor="#FFF" 
                leftIcon={{ type: 'font-awesome', name: 'envelope', size:20,  color: 'white'}}
                />
                <Input style = {styles.input}
                inputContainerStyle={{borderBottomWidth:0}}
                placeholder='Senha' placeholderTextColor="#FFF" 
                leftIcon={{ type: 'font-awesome', name: 'lock',  color: 'white'}}
                />
                <Input style = {styles.input}
                inputContainerStyle={{borderBottomWidth:0}}
                placeholder='Confirme sua senha' placeholderTextColor="#FFF" 
                leftIcon={{ type: 'font-awesome', name: 'lock',  color: 'white'}}
                />
                <Input style = {styles.input}
                inputContainerStyle={{borderBottomWidth:0}}
                placeholder='Telefone' placeholderTextColor="#FFF" 
                leftIcon={{ type: 'font-awesome', name: 'phone',  color: 'white'}}
                />
                <Text style={styles.pickerPlaceholder}>
                    Selecione o que deseja visualizar:
                </Text>

                <View style = {styles.pickerArea}>
                <FontAwesome  name="paw" size={25} style={styles.pickerFA} />
                    <View style={styles.pickerBorder}>
                    <Picker
                        selectedValue={language}
                        style={styles.picker}
                        onValueChange={(itemValue, itemIndex) =>
                        this.setState({language: itemValue})
                        }>
                        <Picker.Item  style={styles.item} label="Todos" value="java" />
                    </Picker>
                    </View>
                 </View> 




                <View style={styles.action}>            
                    <TouchableOpacity style={styles.button}>
                            <Text style = {styles.buttonText}>Cadastrar</Text>
                    </TouchableOpacity>
                </View>

            </View>
            <View>
            <TouchableOpacity style={styles.action} onPress={()=>navigation.navigate('Login')}  >
                            <Text style={styles.pickerPlaceholder}>Voltar para o início</Text>
            </TouchableOpacity>
            </View>


        </ScrollView>  
        </>

    )



}

