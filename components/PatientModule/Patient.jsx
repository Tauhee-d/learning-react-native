import * as react from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialCommunityIcons } from '@expo/vector-icons';




const PateintType = () => {
  return (
    <View style={Styles.maincontainer}>
    <View>
    <Text style={Styles.mainheading}>Select Pateint Type</Text>
    </View>
        

        <View style={Styles.btncontainer}>
      <View style={Styles.subcontainer}>
          <TouchableOpacity style={Styles.btn}>
          <Ionicons  name="person-remove" size={32} />
          <Text style={Styles.btntext}>OutPateint</Text>
          </TouchableOpacity>
      </View>
      <View style={Styles.subcontainer1}>
          <TouchableOpacity style={Styles.btn}>
          <Ionicons style={Styles.icon} name="person" size={32} />
          <Text style={Styles.btntext}>InPateints</Text>
          </TouchableOpacity>
      </View>
      </View>

      <View style={Styles.downbtn}>
        <TouchableOpacity>
        <Text style={Styles.text} >Next</Text>
        </TouchableOpacity>
        <MaterialCommunityIcons name='greater-than' size={17} />
      </View>

   
    
    </View>
    
  );
};

const Styles = StyleSheet.create({
    maincontainer:{
      height:'100%',
      width:'100%',
      alignItems:'center',
      backgroundColor:'#ebedfa'
    },
    mainheading:{
      marginTop:'10%',
      width:'100%',
      fontSize:30,
      fontFamily: 'Times New Roman',
    
    },
    btncontainer:{
             width:"75%",
             marginTop:'40%',


    },
    subcontainer:{
     backgroundColor:'white',
     borderRadius:20,
    

    },
     subcontainer1:{
     backgroundColor:'white',
     borderRadius:20,
     marginTop:'20%',

    },
    btn:{
     flexDirection:'row',
     alignItems:'center',
     justifyContent:'space-evenly',
     padding:12
    },
    btntext :{
      fontSize:18,

    },
   
    downbtn:{
      flexDirection:'row',
      marginTop:'80%',
      marginLeft:'70%',
      alignItems:'center'

    },
    text:{
      fontSize:20,
      marginRight:3,
      color:'#8f9094'
    }

})

export default PateintType;
