import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#F96232"
    },

    title:{
        color:"#f5f5f5",
        fontWeight: "bold",
        fontSize:30
    },

    subtitle:{
        color:"#FFF",
        fontWeight:'bold',
        marginTop:5
    },

    header:{
        backgroundColor:"#F96232",
        alignItems:'center',
        height:120,
    },
    
    inputArea:{
        padding:10,
    },

    input:{
        backgroundColor: "#ff8058",
        borderRadius:10,
        color: "#f5f5f5",
        borderBottomWidth:0,
        paddingHorizontal:5,
        
    },

    picker:{
        backgroundColor:"#ff8058",
        height: 35, 
        width: 295,
        
    },

    pickerArea:{
        
        paddingHorizontal:10,
        flexDirection:'row',
       
    },

    pickerBorder:{
        borderRadius: 10, borderWidth: 1, borderColor: "#F96232", overflow: 'hidden'
    },

    pickerPlaceholder:{
        color:'#FFF',
        fontSize:16,
        textAlign:'center',
    },
    
    pickerFA:{
        color:'#FFF',
        alignSelf:'center',
        
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

  




})