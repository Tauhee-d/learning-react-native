import React from "react";
import { View, Text,StyleSheet, TextInput, TouchableOpacity} from "react-native";
// import Checkbox from 'expo-checkbox'

const Signup = () => {
  return (
    <>
    <View style={style.maincontainer}>
      <Text style={style.mainheading}>
        Sign up
      </Text>
    <View style={style.inputcontainer}>
        <Text style={style.labels}>
            Enter your name
        </Text>
        <TextInput style={style.inputstyle}/>
    </View>
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
    {/* <View>
        <Checkbox style={style.checkbox}  />
        <Text>I've read </Text>
    </View> */}
    <TouchableOpacity style={style.button}>
        <Text style={style.buttontext}>Next</Text>
    </TouchableOpacity>

    </View>
    
    </>
  );
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
    inputcontainer:{
        
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
    checkbox:{
        marginTop:10,
    },
    button:{
        fontSize:40,
        marginTop:50
    },
    buttontext:{
        fontSize:20,
        borderWidth:1,
        textAlign:'center',
        color:"white",
        backgroundColor:"black"
        

        
    }
})

export default Signup;