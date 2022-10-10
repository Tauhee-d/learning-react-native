import {View,Text,StyleSheet,TouchableOpacity,TextInput, ActivityIndicator, FlatList,ScrollView} from 'react-native'
import RadioForm from 'react-native-simple-radio-button';

import { Ionicons,Fontisto,MaterialIcons} from '@expo/vector-icons';
// import {Picker} from"@react-native-picker/picker";
import  {useEffect, useState} from'react';
import  PropsType  from 'prop-types';
import axios from 'axios';



const SearchForPatient = ({navigation}) =>{



  useEffect(() =>{
    patientList()
  },[])

    

  const [responseData,setResponseData] = useState()
  const patientList = () => {

  

  axios
  .get("http://localhost:8000/addOP")
  .then((response) => {
      setResponseData(JSON.stringify(response.data));
      // setResponseData(response.data)
      // console.log(response.data);
  })
  .catch(error => console.log(error))
  }

  
  


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

        // console.log(patientList);
        return(

          
          
          
        
          <View style={style.container}>
            
            <FlatList
            data={[responseData]}
            renderItem={(data)=>{
              // console.log(data.item)
              return (<Text> {data.item} </Text>) 
              
              
            }}
            />


{/* <FlatList> */}

  {/* <View>
            {
              responseData.map((item)=> <Text>{item.fName}</Text>)
            }
  </View> */}
{/* {
  responseData.map((patientList) => {

          <TouchableOpacity onPress={ () => navigation.navigate('Patient Details')}
                style={style.subcontainer}>
                      <View>
                        <Ionicons name='person' size={35} />
                      </View>
                      <View style={style.txtcontainer}>
                        <Text style={style.heading}>cnjkcdxj</Text>
                        <Text style={style.txt}>patientID:</Text>
                        <Text style={style.txt}>UHID:</Text>
                        <Text style={style.txt}>Dr.xyz</Text>
                        <Text style={style.txt}>Added On:</Text>
                      </View>
                </TouchableOpacity>
  })
} */}
      {/* </FlatList> */}


            {/* <FlatList data={record.patientData} keyExtractor={(item,index)}
              renderItem={({item}) => {
                return */}
                {/* <TouchableOpacity onPress={ () => navigation.navigate('Patient Details')}
                style={style.subcontainer}>
                      <View>
                        <Ionicons name='person' size={35} />
                      </View>
                      <View style={style.txtcontainer}>
                        <Text style={style.heading}>Abc</Text>
                        <Text style={style.txt}>patientID:</Text>
                        <Text style={style.txt}>UHID:</Text>
                        <Text style={style.txt}>Dr.xyz</Text>
                        <Text style={style.txt}>Added On:</Text>
                      </View>
                </TouchableOpacity> */}
       
       
          
        
        
          
         
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



