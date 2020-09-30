import React,{useEffect,useState} from 'react';
import {View,Text,StatusBar,Button, Image,Platform,ScrollView,TouchableOpacity} from 'react-native';
import {Picker} from 'react-native';
import {Input} from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';

import styles from './styles';
import Header from '../Header/index';


export default function NewFound({navigation}){
    const [language,setlanguage] = useState('java');
    const [image, setImage] = useState(null);

    useEffect(() => {
        (async () => {
          if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
            if (status !== 'granted') {
              alert('Para enviar uma foto do animal é necessário permissão');
            }
          }
        })();
      }, []);

      const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        console.log(result);
    
        if (!result.cancelled) {
          setImage(result.uri);
        }
      };




    return(
        <>
        <StatusBar barStyle="light-content" backgroundColor="#F96232"/>
        <Header/>
        <ScrollView style={styles.container}>
            <View style={styles.formArea}>
                <Text style={styles.title}>
                    Preencha os dados do Pet encontrado:
                </Text>

                <View style={styles.inputArea}>
                    <Text style={styles.pickerPlaceholder}>
                        Espécie:
                    </Text>

                    <View style = {styles.pickerArea}>
                        <View style={styles.pickerBorder}>
                        <Picker
                            selectedValue={language}
                            style={styles.picker}
                            onValueChange={(itemValue, itemIndex) =>
                            this.setState({language: itemValue})
                            }>
                            <Picker.Item style={styles.item} label="Selecione" value="java" />
                        </Picker>
                        </View>
                    </View> 

                </View>

                <View style={styles.inputArea}>
                    <Text style={styles.pickerPlaceholder}>
                        Nome Temporário
                    </Text>  

                    <Input style = {styles.input}
                    containerStyle = {{ paddingHorizontal: 0 , marginBottom:-20}}
                    inputContainerStyle={{borderBottomWidth:0}}
                    placeholder='Informe um nome' placeholderTextColor='#bdc3c7' 
                    />
                </View>

                <View style={styles.inputArea}>
                    <Text style={styles.pickerPlaceholder}>
                        Sexo:
                    </Text>

                    <View style = {styles.pickerArea}>
                        <View style={styles.pickerBorder}>
                        <Picker
                            selectedValue={language}
                            style={styles.picker}
                            onValueChange={(itemValue, itemIndex) =>
                            this.setState({language: itemValue})
                            }>
                            <Picker.Item style={styles.item} label="Não sei" value="java" />
                        </Picker>
                        </View>
                    </View> 

                </View>

                <View style={styles.inputArea}>
                    <Text>Selecione uma foto do animal:</Text>            
                    <TouchableOpacity style={styles.searchPhoto} onPress={pickImage}>
                        <Text style={styles.searchPhotoText}>
                            Pressione para procurar
                        </Text>
                    </TouchableOpacity>
                    {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
                </View>  

                <View style={styles.inputArea}>
                    <Text style={styles.pickerPlaceholder}>
                        Descreva da melhor forma o animal, cite características físicas, local encontrado, e ajude o(a) dono(a) a encontrar seu Pet
                    </Text>
                    <Input style = {styles.input}
                        containerStyle = {{paddingHorizontal:0, marginBottom:-20 }}
                        inputContainerStyle={{borderBottomWidth:0,}}
                        multiline={true}
                        numberOfLines={4}
                        //  onChangeText={(text) => this.setState({text})}
                        //value={this.state.text}
                        />
                </View>  

                <View style={styles.inputArea}>
                    <Text style={styles.pickerPlaceholder}>
                            Informe onde o animal está atualmente:
                        </Text>

                        <View style = {styles.pickerArea}>
                            <View style={styles.pickerBorder}>
                            <Picker
                                selectedValue={language}
                                style={styles.picker}
                                onValueChange={(itemValue, itemIndex) =>
                                this.setState({language: itemValue})
                                }>
                                <Picker.Item style={styles.item} label="Selecione um estado" value="java" />
                            </Picker>
                            </View>
                        </View> 

                        <View style = {styles.pickerArea}>
                            <View style={styles.pickerBorder}>
                            <Picker
                                selectedValue={language}
                                style={styles.picker}
                                onValueChange={(itemValue, itemIndex) =>
                                this.setState({language: itemValue})
                                }>
                                <Picker.Item style={styles.item} label="Selecione uma cidade" value="java" />
                            </Picker>
                            </View>
                        </View> 
                        <View style = {styles.pickerArea}>
                            <View style={styles.pickerBorder}>
                            <Picker
                                selectedValue={language}
                                style={styles.picker}
                                onValueChange={(itemValue, itemIndex) =>
                                this.setState({language: itemValue})
                                }>
                                <Picker.Item style={styles.item} label="Selecione um bairro" value="java" />
                            </Picker>
                            </View>
                        </View> 
                </View>  

             

               

              

                <View style={styles.inputArea}>
                    <Text style={styles.pickerPlaceholder}>
                        Idade aparente:
                    </Text>

                    <View style = {styles.pickerArea}>
                        <View style={styles.pickerBorder}>
                        <Picker
                            selectedValue={language}
                            style={styles.picker}
                            onValueChange={(itemValue, itemIndex) =>
                            setState({language: itemValue})
                            }>
                            <Picker.Item style={styles.item} label="Não tenho certeza" value="1" />
                            <Picker.Item style={styles.item} label="Filhote" value="2" />
                            <Picker.Item style={styles.item} label="Adulto" value="3" />
                            <Picker.Item style={styles.item} label="Idoso" value="4" />
                        </Picker>
                        </View>
                    </View> 

                </View>  
            </View>

            <View style={styles.actionArea}>
                <TouchableOpacity  onPress={()=>navigation.navigate('Home')} style = {styles.actionButtons}>
                    <Text style = {{...styles.actionButtonsText}}>Cancelar</Text>
                </TouchableOpacity>

                <TouchableOpacity  style = {styles.actionButtons}>
                    <Text style = {styles.actionButtonsText}>Cadastrar</Text>
                </TouchableOpacity>

            </View>

        </ScrollView>
        </>
    )
}