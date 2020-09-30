import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#F96232",
        
       
    },

    header:{
        marginTop:50,
        marginBottom:20,
        backgroundColor: "#F96232",
        alignItems:"center"
       
    },

    title:{
        color:"#f5f5f5",
        fontWeight: "bold",
        fontSize:50,
    },

    input:{
        backgroundColor: "#ff8058",
        borderRadius:10,
        color: "#f5f5f5",
        borderBottomWidth:0,
        paddingHorizontal:5,
        
    },
    
    buttonText:{
        color: "#f5f5f5",
    },

    button:{
        alignItems:"center",
        borderRadius:20,
        borderWidth: 1,
        borderColor: '#f5f5f5',
        padding: 10,
    },

    actions:{
        flexDirection: 'row',
        marginTop: 35,
        marginHorizontal: 20,
        justifyContent:'space-between',
        marginBottom: 120

    },

    lowerAction: {
        
        alignItems: 'center',
    }


})