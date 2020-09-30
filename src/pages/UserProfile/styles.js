import {StyleSheet} from 'react-native';

export default StyleSheet.create({

    container:{
        flex:1,
        backgroundColor: "#FFA082"
    },
    userArea:{
        paddingVertical:30,
        paddingHorizontal:20,
    },
    userName:{
        fontSize:18,
        fontWeight:'bold',
        marginBottom:10,
        
    },
    userPhoto:{
        width:100,
        height:100,
        borderRadius:50,
        borderWidth: 3,
        borderColor: "#F96232",

    },

    user:{
        justifyContent:'center',
        paddingHorizontal:20,
    },
    infoArea:{
        padding:20,
    },
    userID:{
        flexDirection:'row',
    },
    menuItem:{
        fontSize:18,
        marginVertical:10,
        color:"#FFF",
    },

    userData:{
        fontSize:16,
        color:"#FFF",
    },
    menuButtom:{
        flexDirection:'row',
        marginBottom:10,
    },
    extraArea:{
        paddingHorizontal:20,
    }
})