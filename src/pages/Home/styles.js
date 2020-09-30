import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: "#FFA082"
    },

    text:{
        fontSize: 16,
        //fontFamily: "Montserrat"
        marginTop: 40,
    },

    action:{
        marginTop: 30,
        backgroundColor:"#F96232",
        padding: 10,
        borderRadius: 5,
        elevation:3,
        
    },

    actionText:{
        color:"#FFF",
    }, 


    // New Action

    ncontainer:{
        flex:1,
        backgroundColor: "#FFA082",
        alignItems:"center",
    },

   
    //Adopt

    searchArea:{
        marginTop: 20,
        alignItems:'center',
        flexDirection:"row-reverse",
    },

    searchText:{
        
        marginRight: 10,
        marginLeft: 5,
    },

    acontainer:{

        marginTop: 5,
        flexWrap:'wrap',
        flexDirection: "row",
       
    },

    details:{
        flexDirection:'row',
        flexWrap:'wrap',
    },

    animalName:{
        marginTop: 5,
        color: "#fff",
        fontWeight: "bold",
        textAlign: 'center',
    },

    animalInfo:{
        color: "#fff",
        marginLeft: 10,
        
    },

 


    //LostAndFound

    toggleContainer:{
        flexDirection:'row',
        marginTop:30,
        alignItems:'center',
        justifyContent:'center',
    },

    togglePage1:{
       
        width:150,
        backgroundColor:"#F96232",
        padding: 10,
        marginRight:2,
        borderBottomRightRadius: 0,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius:10,
        elevation:3,
       
        
    },

    togglePage2:{
        width:160,
        backgroundColor:"#F96232",
        padding: 10,
        borderTopRightRadius:10,
        borderBottomRightRadius:10,
        elevation:3,
        

    },

    toggleText:{
        color:'#FFF'
    },

    picker:{
        backgroundColor:'#FFF',
        height: 35, 
        width: 150,
        
    },

    searchContainer:{
        flexDirection:'row',
        flexWrap:'wrap',
       
        
    },

    pickerArea:{
        marginTop:10,
        marginLeft:19
    },

    pickerBorder:{
        borderRadius: 10, borderWidth: 1, borderColor: '#bdc3c7', overflow: 'hidden'
    },
    
    pickerLabel:{
        fontSize:14,
    },

    filterButton:{
        marginLeft: 15,
        marginTop: 27,
        backgroundColor: '#FFF9',
        width:150,
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        elevation:4,
        
    },  
    
    LostAndFoundList:{
    
        marginTop: 10,
        flexDirection:'row',
        flexWrap:'wrap',
        
    },

    notFoundError:{
        fontWeight:'bold',
        marginLeft:20,
        marginTop:20
    },

    // Modal:

    centeredView: {
        flex: 1,
         marginTop: 50, 
      },

      modalView: {
        margin: 20,
        height:400,
        backgroundColor: "white",
         borderRadius: 20,
        shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2
          },
         shadowOpacity: 0.25,
         shadowRadius: 3.84,
          elevation: 5,
      },  

     openButton: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },

    contactButton: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        backgroundColor:"#F96232",
        marginLeft:5,
    },

    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
    
    modalHeaderText: {
        textAlign: "center",
        color: "white",
        fontWeight:'bold',
        fontSize:18,
      },

    modalHeader:{
        backgroundColor: "#F96232",
        height:30,
        
    },  

    modalActions:{
        flexDirection:'row',
        justifyContent:'flex-end',
        paddingHorizontal: 10,
        paddingVertical:5,
    },

    owner:{
        padding:20,
    },

    ownerPhoto:{
        width:150,
        height:150,
    },

    info:{
        paddingLeft:20,
        paddingRight:20,
        paddingBottom:10,
    },

    modalTitles:{
        fontSize:16,
        fontWeight:'bold',
    }

})