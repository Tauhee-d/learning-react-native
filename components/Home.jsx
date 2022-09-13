import React from 'react'
import bg from './Images/home.webp'
import {View,TouchableOpacity,StyleSheet,Text,TextInput, ImageBackground} from 'react-native'

function Home() {
  return (
    <>
   <View style={style.maincontainer} >
        <ImageBackground source={bg} style={style.bg}>
            <View style={style.buttoncontainer}>
                <TouchableOpacity style={style.button}>
                <Text style={style.buttonlogin}>LOG IN</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.button}>
                <Text style={style.buttonregister}>REGISTER</Text>
            </TouchableOpacity>
            </View>

        </ImageBackground>
       
    </View>
    </>
  )
}
const style = StyleSheet.create({
        maincontainer:{
        height:"100%",
        justifyContent:'center',
        alignItems:'center',
    },
    bg:{
        flexDirection:"row",
        height:"100%",
        width:"100%",
    },
    buttoncontainer:{
            marginTop:636,
            height:70,
            width:'100%',
            flexDirection:'row',
            backgroundColor:'white'
    },
    button:{
        // width:167,
        // height:100,
        flex:1,
        // marginTop:655,
        // backgroundColor:"white",
        
    },
    buttonlogin:{
        borderWidth:1,
        width:190,
        padding:8,
        fontSize:20,
        marginTop:12,
        marginLeft:8,
        justifyContent:'space-between',
        textAlign:'center',
        borderRadius:8,
      
    },
    buttonregister:{
        borderWidth:1,
        width:190,
        padding:8,
        fontSize:20,
        marginTop:12,
        marginLeft:8,
        justifyContent:'space-between',
        textAlign:'center',
        borderRadius:8,
        color:'white',
        backgroundColor:'black'
    }

 
 
})

export default Home