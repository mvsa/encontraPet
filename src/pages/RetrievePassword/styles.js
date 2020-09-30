import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#F96232"
    },

    title:{
        color:"#f5f5f5",
        fontWeight: "bold",
        fontSize:50
    },

    subtitle:{
        color:"#FFF",
        fontWeight:'bold',
        marginTop:15
    },

    header:{
        marginTop:30,
        alignItems:'center',
        height:220,
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
        width: 120,
    },
    action:{
        marginTop:20,   
        alignItems:'center',
    },
    return:{
        color:'#FFF',
        fontSize:16,
        textAlign:'center',
    }



})