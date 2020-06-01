import {StyleSheet } from 'react-native';

export const globalStyles= StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
      },
      titleText:{
          fontWeight:'bold',
         // textAlign:'center',
          color:'#333',
      }, 
    input:{
        borderWidth:2,
        borderColor:'#ddd',
        padding:10,
        fontSize:18,
        borderRadius:10,
        marginTop:1,
        marginBottom:1,
        
        
    },
    errorText:{
      color:'crimson',
      fontWeight:'bold',
      marginBottom:10,
      marginTop:6,
      textAlign:'center'
  }
  
})