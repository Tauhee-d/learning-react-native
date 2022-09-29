import {View,Text,StyleSheet,TouchableOpacity,TextInput, ActivityIndicator} from 'react-native'
import RadioForm from 'react-native-simple-radio-button';

// import { Input } from "@rneui/themed";
import { Ionicons,Fontisto,MaterialIcons} from '@expo/vector-icons';
import {Picker} from"@react-native-picker/picker";
import  {useEffect, useState} from'react';
import  PropsType  from 'prop-types';



const SearchForPatient = ({navigation}) =>{




    const SearchBar = (props) => {
        return (
          <View style={style.search}>
            <Fontisto name='search' size={25}/>
            <TextInput value={props.value} placeholder='search' />
               {props.editing ?<TouchableOpacity onPress={props.onClear}>
              <Text>Clear</Text>
            </TouchableOpacity> : null} 
            {props.loading ? <ActivityIndicator/> : null}
          </View>
        )
      }


 SearchForPatient.PropsType = {
    onChangeText : PropsType.func.isRequired,
    value : PropsType.string.isRequired,
    loading : PropsType.bool.isRequired,
    editing : PropsType.bool.isRequired,
    onClear : PropsType.func.isRequired
 }

      const Body = (props) => {


        useEffect(() =>{}, []);


        return(



          <View style={style.container}>
          <TouchableOpacity onPress={ () => navigation.navigate('Patient Details')}
          style={style.subcontainer}>
                <View>
                  <Ionicons name='person' size={35} />
                </View>
                <View style={style.txtcontainer}>
                  <Text style={style.heading}>Abc</Text>
                  <Text style={style.txt}>Patient Id:</Text>
                  <Text style={style.txt}>UHID:</Text>
                  <Text style={style.txt}>Dr.xyz</Text>
                  <Text style={style.txt}>Added On:</Text>
                </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={ () => navigation.navigate('Patient Details')}
          style={style.subcontainer}>
                <View>
                  <Ionicons name='person' size={35} />
                </View>
                <View style={style.txtcontainer}>
                  <Text style={style.heading}>Patient Name</Text>
                  <Text style={style.txt}>Patient Id</Text>
                  <Text style={style.txt}>Assigned Doctor</Text>
                </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={ () => navigation.navigate('Patient Details')}
          style={style.subcontainer}>
                <View>
                  <Ionicons name='person' size={35} />
                </View>
                <View style={style.txtcontainer}>
                  <Text style={style.heading}>Patient Name</Text>
                  <Text style={style.txt}>Patient Id</Text>
                  <Text style={style.txt}>Assigned Doctor</Text>
                </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={ () => navigation.navigate('Patient Details')}
          style={style.subcontainer}>
                <View>
                  <Ionicons name='person' size={35} />
                </View>
                <View style={style.txtcontainer}>
                  <Text style={style.heading}>Patient Name</Text>
                  <Text style={style.txt}>Patient Id</Text>
                  <Text style={style.txt}>Assigned Doctor</Text>
                </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={ () => navigation.navigate('Patient Details')}
          style={style.subcontainer}>
                <View>
                  <Ionicons name='person' size={35} />
                </View>
                <View style={style.txtcontainer}>
                  <Text style={style.heading}>Patient Name</Text>
                  <Text style={style.txt}>Patient Id</Text>
                  <Text style={style.txt}>Assigned Doctor</Text>
                </View>
          </TouchableOpacity>
        
          
         
        </View>
        )
      }


  return(
    <View style={style.maincontainer} >
    <View style={style.container}>
        <SearchBar/>
        <Body/>
        
    
    </View>
    </View>
  )  
}

const style = StyleSheet.create({
   



    maincontainer: {
        height: "100%",
        width: "100%",
        justifycontent: "center",
        alignItems: "center",
        backgroundColor: "#ebedfa",
        padding:10
      },
      search:{
        
        width:'100%',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        borderWidth:1,
        padding:5,
        borderRadius:30,
        backgroundColor:'white'

      },
      
      container:{
        height:'100%',
        width:'100%',
        padding:5,
      },
      subcontainer:{
        backgroundColor:'white',
        margin:5,
        justifycontent: "center",
        alignItems: "center",
        flexDirection:'row',
        padding:5,
        shadowOffset: {
          width: 0,
          height: 6,
        },
        shadowOpacity:  0.20,
        shadowRadius: 5,
        elevation: 5
      },
      heading:{
        fontSize:20
      },
      txtcontainer:{
        marginLeft:10
      },
    dateAndGender:{
        flexDirection:'row',
        justifyContent:'space-around',
        width:'100%'

    },
    gender:{
        flexDirection:'row',
        
    },
    
   
    
    
})

export default SearchForPatient ; 



