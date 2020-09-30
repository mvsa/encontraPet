import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const AppStack = createStackNavigator();

import Login from './pages/Login';
import Register from './pages/Register'
import Home from './pages/Home'
import RetrievePassword from './pages/RetrievePassword';
import PetView from './pages/PetView';
import NewAdoption from './pages/NewAdoption';
import NewFound from './pages/NewFound';
import NewLost from './pages/NewLost';
import MyPets from './pages/MyPets';
import MyHistory from './pages/MyHistory';

export default function Routes(){
    return(
        <NavigationContainer>
            <AppStack.Navigator initialRouteName="Login" screenOptions={{headerShown:false}}>
                <AppStack.Screen name ="Login" component = {Login}/>
                <AppStack.Screen name ="Register" component = {Register}/>
                <AppStack.Screen name ="Home" component = {Home}/>
                <AppStack.Screen name ="RetrievePassword" component = {RetrievePassword}/>
                <AppStack.Screen name ="PetView" component = {PetView}/>
                <AppStack.Screen name ="NewAdoption" component = {NewAdoption}/>
                <AppStack.Screen name ="NewFound" component = {NewFound}/>
                <AppStack.Screen name ="NewLost" component = {NewLost}/>
                <AppStack.Screen name ="MyPets" component = {MyPets}/>
                <AppStack.Screen name ="MyHistory" component = {MyHistory}/>
            </AppStack.Navigator>
        </NavigationContainer>
    );
}