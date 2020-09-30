import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#FFA082"
    },

    AnimalContainer:{
        marginLeft: 30,
    },

    imgAnimal:{
        width:300,
        height: 300,
        marginTop: 20
    },

    name: {
        fontSize: 20,
        marginTop: 20,
        marginBottom: 10,
    },

    status:{
        marginBottom: 10, 
    },

    registerDate:{
        fontWeight:"bold",
        fontSize: 12, 
        textAlign:"right",   
        marginRight:40,
        marginTop:10,
    },

    button:{
        marginTop: 30,
        backgroundColor:"#F96232",
        padding: 10,
        borderRadius: 5,
        marginRight:40,
        alignItems:'center',
    },

    buttonText:{
        color:"#FFF",
    }

})