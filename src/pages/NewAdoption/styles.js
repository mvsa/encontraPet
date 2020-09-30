import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#FFA082",
    },
    
    formArea:{
        padding:20,

    },

    title:{
        fontSize:18,
        fontWeight:'bold',
    },
    inputArea:{
        marginTop:12,
        marginBottom:5,
        
    },
    pickerPlaceholder:{
        fontSize:16,
    },


    pickerArea:{
        marginTop:5,
      
    },

    pickerBorder:{
        borderRadius: 10, borderWidth: 1, borderColor: '#bdc3c7', overflow: 'hidden'
    },
    picker:{
        backgroundColor:'#FFF',
        height: 35,
         
        
        
    },

    input:{
        backgroundColor: "#FFF",
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#bdc3c7',
        paddingHorizontal:5,
        
    },

    searchPhoto:{
        backgroundColor:"#F96232",
        padding: 10,
        borderRadius: 5,
        elevation:5,
        alignItems:'center',
    },

    searchPhotoText:{
        color:"#FFF",
       
    },

    actionArea:{
        flexDirection:'row',
        paddingHorizontal:70,
        paddingBottom:10,
        justifyContent:'space-between',
    },
    actionButtons:{
        alignItems:'center',
        backgroundColor:"#F96232",
        elevation:5,
        borderRadius: 5,
        padding:10,
        
    },
    actionButtonsText:{
        color:"#FFF",
        fontSize:16,
    }
})    