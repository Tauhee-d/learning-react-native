import {View,StyleSheet,TouchableOpacity,Text,TextInput} from 'react-native'
import { MaterialCommunityIcons,Ionicons,FontAwesome} from '@expo/vector-icons'
// import { SelectListProps } from 'react-native-dropdown-select-list'
const PatientDetails = () => {


  const Header = () =>{
    return(
      <View style={Styles.header}>
        <Text style={Styles.headertxt}>Enter Patient Details</Text>
      </View>
    )
  }



  const SubContainer1 = () =>{

        // const [selected, setSelected] = React.useState('')
        // const data = [
        //   {key:1, value:'John'},
        //   {key:2, value:'Chris Hemsworth'},
        //   {key:3, value:'Karan johar'},
        //   {key:4, value:'Chole'},
        // ];

    return(
      <View>

      <View style={Styles.subcontainer1}>
        <TextInput style={Styles.subcontainer1txt} placeholder='Patient Id'/>
        <MaterialCommunityIcons style={Styles.icon} name='human-male' size={70}/>

      </View>
      <View style={Styles.subcontainer1}>
        <TextInput style={Styles.c2txt1} placeholder='Unique Health Id'/>
        <TextInput style={Styles.c2txt2} placeholder='Age'/>
      </View>
      <View style={Styles.subcontainer1}>
        <TextInput style={Styles.c2txt1} placeholder='First Name'/>
        <TextInput style={Styles.c2txt2} placeholder='Weight'/>
      </View>
      <View style={Styles.subcontainer1}>
        <TextInput style={Styles.lastname} placeholder='Last Name'/>
        <View>
          <Text style={Styles.genderheading}>Gender:</Text>
          <View style={Styles.gender}>

          <TouchableOpacity >
            <Ionicons name='male' size={20}/>
          </TouchableOpacity>
          <TouchableOpacity >
            <Ionicons name='female' size={20}/>
          </TouchableOpacity>
          <TouchableOpacity >
            <FontAwesome name='transgender-alt' size={20}/>
          </TouchableOpacity>
          </View>
        </View>
        {/* <TextInput style={Styles.c2txt2} placeholder='Age'/> */}
      </View>
      <View style={Styles.subcontainer1}>
        <TextInput style={Styles.c2txt1} placeholder='Email'/>
        <TextInput style={Styles.c2txt2} placeholder='Doctor'/>
        {/* <SelectListProps data={data} setSelected={setSelected}/> */}
      </View>
      <View style={Styles.subcontainer1}>
        <TextInput style={Styles.c2txt1} placeholder='Phone Number'/>
        <TextInput style={Styles.c2txt2} placeholder='Doctor'/>
      </View>
      <View style={Styles.subcontainer1}>
        <TextInput style={Styles.lastname} placeholder='Guardian Email'/>
      </View>
      <View style={Styles.subcontainer2}>
        <TextInput style={Styles.s2txt1} placeholder='Address'/>
      </View>
      <View style={Styles.subcontainer1}>
        <TextInput style={Styles.c3txt1} placeholder='City'/>
        <TextInput style={Styles.c3txt1} placeholder='State'/>
      </View>
      <View style={Styles.subcontainer1}>
        <TextInput style={Styles.c3txt1} placeholder='Country'/>
        <TextInput style={Styles.c3txt1} placeholder='Pin Code'/>
      </View>      

      

      </View>
      
    )
  }
  

  return (
    <View style = {Styles.maincontainer}>
        <Header/>
        <SubContainer1/>
    </View>
  )
}

const Styles = StyleSheet.create({
    maincontainer:{
        height:'100%',
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: "#ebedfa",
    },
    header:{
        height:'10%',
        width:'100%',
        alignItems:'center',
      },
      headertxt:{
        fontSize:30,
    },
      icon:{
        backgroundColor:'white',
        borderRadius:20,
        height:'100%',
        justifyContent:'center',
        marginLeft:25,
        
      },
      subcontainer1:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:5,
    },
      subcontainer2:{
        alignItems:'center',
        marginTop:5,
    },
      subcontainer1txt:{
        fontSize:20,
        backgroundColor:'white',
        height:'70%',
        width:'70%',
        borderRadius:20,
        borderWidth:2,
        borderColor:'#d9d9d9',
        alignItems:'center',
        textAlign:'center',
        marginLeft:5,
        
      },
      genderheading:{
        fontSize:18,
        fontWeight:10,
      },
        c2txt1:{
        fontSize:20,
        backgroundColor:'white',
        height:'100%',
        width:'70%',
        borderRadius:20,
        borderWidth:2,
        borderColor:'#d9d9d9',
        alignItems:'center',
        textAlign:'center',
        marginLeft:5,
        
      },
        c3txt1:{
        fontSize:20,
        backgroundColor:'white',
        height:50,
        width:'48%',
        borderRadius:20,
        borderWidth:2,
        borderColor:'#d9d9d9',
        alignItems:'center',
        textAlign:'center',
        marginLeft:5,
      },
        lastname:{
        fontSize:20,
        backgroundColor:'white',
        height:50,
        width:'70%',
        borderRadius:20,
        borderWidth:2,
        borderColor:'#d9d9d9',
        alignItems:'center',
        textAlign:'center',
        marginLeft:5,
      },
        s2txt1:{
        fontSize:20,
        backgroundColor:'white',
        height:50,
        width:'98%',
        borderRadius:20,
        borderWidth:2,
        borderColor:'#d9d9d9',
        alignItems:'center',
        textAlign:'center',
        marginLeft:5,
      },
        c2txt2:{
        fontSize:20,
        backgroundColor:'white',
        height:50,
        width:'27%',
        borderRadius:20,
        borderWidth:2,
        borderColor:'#d9d9d9',
        alignItems:'center',
        textAlign:'center',
        marginLeft:5,
        marginTop:5,
      },
      gender:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        width:80
      },
        
})

export default PatientDetails