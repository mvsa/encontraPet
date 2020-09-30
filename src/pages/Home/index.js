import React, {useEffect,useState} from 'react'
import {View, Text, TouchableOpacity, SafeAreaView, StatusBar,Image, TextInput,Modal} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { ScrollView } from 'react-native-gesture-handler';
import {FontAwesome} from '@expo/vector-icons';
import {Card} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {Picker} from 'react-native';

import Profile from '../UserProfile/index';
import PetView from '../PetView/index';
import styles from './styles';
import Header from '../Header/index';




function NewAction({navigation}) {
    return (
      <View style = {styles.ncontainer}>
        <Text style = {styles.text}>Deseja colocar um Pet para adoção?</Text>
        <TouchableOpacity  onPress={()=>navigation.navigate('NewAdoption')} style = {styles.action}>
            <Text style = {styles.actionText}>Colocar para adoção</Text>
        </TouchableOpacity>
        <Text style = {styles.text}>Encontrou um animal aparentemente perdido?</Text>
        <TouchableOpacity  onPress={()=>navigation.navigate('NewFound')} style = {styles.action}>
            <Text style = {styles.actionText}>Relatar que Achei</Text>
        </TouchableOpacity>
        <Text style = {styles.text}>Perdeu um Pet e precisa encontra-lo?</Text>
        <TouchableOpacity  onPress={()=>navigation.navigate('NewLost')} style = {styles.action}>
            <Text style = {styles.actionText}>Informar que perdi</Text>
        </TouchableOpacity>

      </View>
    );
  }
  
  function Adopt() {

    const navigation = useNavigation();

    function navigateToAnimal(){
      navigation.navigate('PetView', {});
    }



    return (
      <View style = {styles.container}>
        <View style = {styles.searchArea}>
          <Text style = {styles.searchText}>Filtros</Text>
          <FontAwesome name="search" size={20} />
        </View>
        <View style = {styles.acontainer}>

        <TouchableOpacity onPress={()=>navigateToAnimal()}>    
          <Card containerStyle = {{
            backgroundColor: '#FF8058',
            padding: 0,
            width: 175,
            marginRight: 3,
            marginLeft: 2,
          }}>
             
             <Card.Image source={require('../../assets/dog.jpeg')}></Card.Image>
            
              <Text style = {styles.animalName}>Dog</Text>
              <View style = {styles.details}>   
                  <Text style = {styles.animalInfo}>#Macho</Text>
                  <Text style = {styles.animalInfo}>#Vacinado</Text>
                  <Text style = {styles.animalInfo}>#Castrado</Text>
                  <Text style = {styles.animalInfo}>#Vermifugado</Text>
             </View>
          </Card>
        </TouchableOpacity>    

        <TouchableOpacity onPress={()=>navigateToAnimal()}>     
          <Card containerStyle = {{
            backgroundColor: '#FF8058',
            padding: 0,
            width: 175,
            marginLeft: 2,
            marginRight: 3,
            
          }}>
             
             <Card.Image source={require('../../assets/dog2.jpg')}></Card.Image>
            
              <Text style = {styles.animalName}>Dog</Text>
              <View style = {styles.details}>   
                  <Text style = {styles.animalInfo}>#Macho</Text>
                  <Text style = {styles.animalInfo}>#Vacinado</Text>
                  <Text style = {styles.animalInfo}>#Castrado</Text>
                  <Text style = {styles.animalInfo}>#Vermifugado</Text>
             </View>
          </Card>
        </TouchableOpacity>   

        <TouchableOpacity onPress={()=>navigateToAnimal()}>     
          <Card containerStyle = {{
            backgroundColor: '#FF8058',
            padding: 0,
            width: 175,
            marginLeft: 2,
            marginRight: 3,
          }}>
             
             <Card.Image source={require('../../assets/dog3.jpg')}></Card.Image>
            
              <Text style = {styles.animalName}>Dog</Text>
              <View style = {styles.details}>   
                  <Text style = {styles.animalInfo}>#Macho</Text>
                  <Text style = {styles.animalInfo}>#Vacinado</Text>
                  <Text style = {styles.animalInfo}>#Castrado</Text>
                  <Text style = {styles.animalInfo}>#Vermifugado</Text>
             </View>
          </Card>
        </TouchableOpacity>    
          

          


        </View>
      </View>
    );
  }

  function LostAndFound() {
    const [page,setPage] = useState(true);
    const [language,setlanguage] = useState('java');
    const [modalVisible, setModalVisible] = useState(false);

    function Lost() {
      return (
        <View style={styles.LostAndFoundList}>
          
          
          <TouchableOpacity onPress={()=>setModalVisible(true)} >    
          <Card containerStyle = {{
            backgroundColor: '#FF8058',
            padding: 0,
            width: 175,
            marginRight: 3,
            marginLeft: 2,
          }}>
             
             <Card.Image source={require('../../assets/dog.jpeg')}></Card.Image>
            
              <Text style = {styles.animalName}>Dog</Text>
              <View style = {styles.details}>   
              <Text style = {styles.animalInfo}>#Macho</Text>
    
             </View>
          </Card>
        </TouchableOpacity>


        <TouchableOpacity onPress={()=>setModalVisible(true)}>    
          <Card containerStyle = {{
            backgroundColor: '#FF8058',
            padding: 0,
            width: 175,
            marginRight: 3,
            marginLeft: 2,
          }}>
             
             <Card.Image source={require('../../assets/dog2.jpg')}></Card.Image>
            
              <Text style = {styles.animalName}>Dog</Text>
              <View style = {styles.details}>   
                  <Text style = {styles.animalInfo}>#Macho</Text>
              
             </View>
          </Card>
        </TouchableOpacity>  
        

        <TouchableOpacity onPress={()=>setModalVisible(true)}>    
          <Card containerStyle = {{
            backgroundColor: '#FF8058',
            padding: 0,
            width: 175,
            marginRight: 3,
            marginLeft: 2,
          }}>
             
             <Card.Image source={require('../../assets/dog2.jpg')}></Card.Image>
            
              <Text style = {styles.animalName}>Dog</Text>
              <View style = {styles.details}>   
                  <Text style = {styles.animalInfo}>#Macho</Text>
              
             </View>
          </Card>
        </TouchableOpacity>  
        
        
        
         

        </View>
      );
    }

    function Found() {
      return (
        <View style={styles.LostAndFoundList}>
          <Text style={styles.notFoundError}>Desculpe, ainda não foram registrados animais encontrados :(</Text>
        </View>
      );
    }


    return (
      <View style = {styles.container}>

        <View style = {styles.toggleContainer}>
          <TouchableOpacity style = {styles.togglePage1} onPress={()=>setPage(true)}>
            <Text style = {styles.toggleText}>
            Animais Perdidos
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style = {styles.togglePage2}  onPress={()=>setPage(false)} >
            <Text style = {styles.toggleText} >
            Animais Encontrados
            </Text>
          </TouchableOpacity>
        </View>
        <View style = {styles.searchContainer}>
          <View style = {styles.pickerArea}>
            <Text style={styles.pickerLabel}>
              Espécie:
            </Text>
            <View style={styles.pickerBorder}>
              <Picker
                selectedValue={language}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({language: itemValue})
                }>
                <Picker.Item label="Todos" value="java" />
              </Picker>
            </View>
          </View>  

          <View style = {styles.pickerArea}>   
            <Text style={styles.pickerLabel}>
              Sexo:
            </Text>
            <View style={styles.pickerBorder}>
              <Picker
                selectedValue={language}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({language: itemValue})
                }>
                <Picker.Item label="Todos" value="java" />
              </Picker>
            </View>
          </View>    

          <View style = {styles.pickerArea}>
            <Text style={styles.pickerLabel}>
              Estado:
            </Text>
            <View style={styles.pickerBorder}>
              <Picker
                selectedValue={language}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({language: itemValue})
                }>
                <Picker.Item label="Todos" value="java" />
              </Picker>
            </View>
          </View>  


          <View style = {styles.pickerArea}>    
            <Text style={styles.pickerLabel}>
              Cidade:
            </Text>
            <View style={styles.pickerBorder}>
              <Picker
                selectedValue={language}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({language: itemValue})
                }>
                <Picker.Item label="Todos" value="java" />
              </Picker>
            </View>
          </View>  


          <View style = {styles.pickerArea}>    
            <Text style={styles.pickerLabel}>
              Bairro:
            </Text>
            <View style={styles.pickerBorder}>
              <Picker
                selectedValue={language}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({language: itemValue})
                }>
                <Picker.Item label="Todos" value="java" />
              </Picker>
            </View>
          </View>  

            <TouchableOpacity style={styles.filterButton}>
            <FontAwesome name="search" color="#FFF"  />
              <Text>Filtrar</Text>
            </TouchableOpacity>

        </View>

        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          // Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalHeaderText}>Dog</Text>
            </View>

            <View style={styles.owner}>
              <Text style={styles.modalTitles}>Responsável:</Text>
              <Text>Ryan da Silva</Text>
             <Image style={styles.ownerPhoto} source={require('../../assets/ryan.jpg')}></Image>
            </View>

            <View style={styles.info}>
              <Text style={styles.modalTitles}>Informações Adicionais</Text>
              <Text>
              Animal muito dócil, possui um sinal embaixo da patinha esquerda, perdi perto da padaria Aurora
              </Text>
            </View>

          <View style={{
            borderBottomColor: '#888888',
            borderBottomWidth: 1,
          }}/>

          <View style={styles.modalActions}>
            <TouchableOpacity
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Voltar</Text>
            </TouchableOpacity>
            

            <TouchableOpacity
              style={styles.contactButton}
            >
              <Text style={styles.textStyle}>Entrar em contato</Text>
            </TouchableOpacity>
          </View>    

          </View>
        </View>
      </Modal>        


        {page ? <Lost/> : <Found/>}
      </View>
    );
  }

 
const Tab = createBottomTabNavigator();


function MyTabs(){
  return(
    <Tab.Navigator
    lazy = {false}
      initialRouteName = "Adoção"
      tabBarOptions = {{
        labelStyle: { fontSize: 12, color:"#FFF" },
        activeTintColor:'#FFF',
        activeBackgroundColor: '#F96232',
        inactiveBackgroundColor:'#FF8058'
      }}
    >
      <Tab.Screen
        name = "Novo"
        component = {NewAction}
        options ={{
          tabBarLabel: 'Novo',
          tabBarIcon: ({ size}) =>(
            <FontAwesome name="plus" color="#FFF" size={size} />
          ),
        }}
      />

    <Tab.Screen
        name = "Adoção"
        component = {Adopt}
        options ={{
          tabBarLabel: 'Adoção',
          tabBarIcon: ({ size}) =>(
            <FontAwesome name="heart" color="#FFF" size={size} />
          ),
        }}
      />

    <Tab.Screen
        name = "Perdidos"
        component = {LostAndFound}
        options ={{
          tabBarLabel: 'Perdidos',
          tabBarIcon: ({ size}) =>(
            <FontAwesome name="search" color="#FFF" size={size} />
          ),
        }}
      />

      <Tab.Screen
        name = "Perfil"
        component = {Profile}
        options ={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ size}) =>(
            <FontAwesome name="user" color="#FFF" size={size} />
          ),
        }}
      />

    </Tab.Navigator>
  );
}




export default function Home(){
    return(
      <>
      <StatusBar barStyle="light-content" backgroundColor="#F96232"/>
      <Header/>
      <MyTabs/>
       </>
        
    )
}