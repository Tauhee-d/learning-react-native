import * as react from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialCommunityIcons } from '@expo/vector-icons';




const PateintType = ({navigation}) => {
  return (
    <View style={Styles.maincontainer}>
        

        <View style={Styles.btncontainer}>
      <View style={Styles.subcontainer}>
          <TouchableOpacity style={Styles.btn} onPress={()=> navigation.navigate('Enter Pateint Details')}>
          <Ionicons  name="person-remove" size={32} />
          <Text style={Styles.btntext}>OutPateint</Text>
          </TouchableOpacity>
      </View>
      <View style={Styles.subcontainer1}>
          <TouchableOpacity style={Styles.btn} onPress={()=> navigation.navigate('Enter Pateint Details')}>
          <Ionicons style={Styles.icon} name="person" size={32} />
          <Text style={Styles.btntext}>InPateints</Text>
          </TouchableOpacity>
      </View>
      </View>

   
    
    </View>
    
  );
};

const Styles = StyleSheet.create({
    maincontainer:{
      height:'100%',
      width:'100%',
      alignItems:'center',
      backgroundColor:'#ebedfa',
      justifyContent:'center'
    },
   
    btncontainer:{
             width:"75%",

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
   
   

})

export default PateintType;
