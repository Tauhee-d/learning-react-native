import React from 'react'
import { View, Text,StyleSheet, TextInput, TouchableOpacity} from "react-native";




const Signin = ({navigation}) => {
  return (
<>
    <View style={style.maincontainer}>
      <Text style={style.mainheading}>
        Sign in
      </Text>
    
    <View style={style.inputcontainer}>
        <Text style={style.labels}>
            Enter your email
        </Text>
        <TextInput style={style.inputstyle}/>
    </View>
    <View style={style.inputcontainer}>
        <Text style={style.labels}>
            Enter your password
        </Text>
        <TextInput style={style.inputstyle}
         secureTextEntry={true}/>
    </View>
   
    <TouchableOpacity style={style.button} onPress={() => navigation.navigate('Dashboard')} >
        <Text style={style.buttontext}>Sign in</Text>
    </TouchableOpacity>

    </View>
    
    </>  )
}

const style = StyleSheet.create({
    maincontainer:{
        height:"100%",
        paddingTop:30,
        paddingHorizontal:30,


    },
    mainheading:{
        fontSize:40,
        paddingTop:40,
        paddingBottom:20,
        textAlign:'center',
        marginTop:30


    },
    labels:{
        fontSize:20,
        marginTop:15,
        marginBottom:5,
        lineHeight:25,

    },
    inputstyle:{
        borderColor:'black',
        borderWidth:1,
        paddingHorizontal:10,
        borderRadius:3

    },
    button:{
        fontSize:40,
        marginTop:50,
    },
    buttontext:{
        borderRadius:15,
        fontSize:20,
        borderWidth:1,
        textAlign:'center',
        color:"white",
        backgroundColor:"black",
        padding:10
        
    
    },
    inputcontainer:{
        
    }
})

export default Signin