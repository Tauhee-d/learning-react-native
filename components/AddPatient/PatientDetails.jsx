import {StyleSheet,Text,View,  ScrollView,TextInput,TouchableOpacity,} from "react-native";
import React from "react";
import {
  MaterialCommunityIcons,
  Ionicons,
  FontAwesome,
} from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react/cjs/react.development";

const PatientDetails = ({ navigation }) => {
  const Phase1 = () => {
      const [Enable , setEnable] = useState('D1')
      const [Treatment , setTreatment] = useState('T1')

    return (
      <View style={styles.container}>
        <View style={styles.subcontainer1}>
          <TextInput style={styles.subcontainer1txt} placeholder="Patient Id" />
          <TextInput
            style={styles.subcontainer1txt}
            placeholder="Unique Health Id"
          />
          <TextInput style={styles.subcontainer1txt} placeholder="First Name" />
          <TextInput style={styles.subcontainer1txt} placeholder="Last Name" />
          <TextInput style={styles.subcontainer1txt} placeholder="Email" />
          <TextInput
            style={styles.subcontainer1txt}
            placeholder="Phone Number"
          />
          <TextInput
            style={styles.subcontainer1txt}
            placeholder="Guardian Name"
          />
          <TextInput
            style={styles.subcontainer1txt}
            placeholder="Guardian Email"
          />
          <TextInput
            style={styles.subcontainer1txt}
            placeholder="Guardian Phone no"
          />
        </View>
        <View style={styles.subcontainer2}>
          <MaterialCommunityIcons
            style={styles.icon}
            name="human-male"
            size={70}
          />
          <TextInput style={styles.subcontainer1txt} placeholder="Age" />
          <TextInput style={styles.subcontainer1txt} placeholder="Weight" />
          <View style={styles.subcontainer1}>
            <View style={styles.genderContainer}>
              <Text style={styles.genderheading}>Gender:</Text>
              <View style={styles.gender}>
                <TouchableOpacity>
                  <Ionicons name="male" size={20} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Ionicons name="female" size={20} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <FontAwesome name="transgender-alt" size={20} />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.doctor}>
            <Text style={styles.txt}>Doctor:</Text>
            <View style={styles.picker}>
                <Picker
                  selectedValue={Enable}
                  style={{width:'100%'}}
                  onValueChange={(itemValue) => setEnable(itemValue)}


                >
                  <Picker.Item style={styles.pickertxt} label='Dr.Josh' value='D1'/>
                  <Picker.Item style={styles.pickertxt} label='Dr.Bosh' value='D2'/>
                  <Picker.Item style={styles.pickertxt} label='Dr.Mosh' value='D3'/>
                  <Picker.Item style={styles.pickertxt} label='Dr.Zab' value='D4'/>
                </Picker>
            </View>

          </View>
          <View style={styles.Treatment}>
            <Text style={styles.txt}>Treatment:</Text>
            <View style={styles.picker}>
                <Picker
                  selectedValue={Treatment}
                  style={{width:'100%'}}
                  onValueChange={(itemValue) => setTreatment(itemValue)}


                >
                  <Picker.Item style={styles.pickertxt} label='Surgery' value='T1'/>
                  <Picker.Item style={styles.pickertxt} label='Neurology' value='T2'/>
                  <Picker.Item style={styles.pickertxt} label='Cardiology' value='T3'/>
                </Picker>
            </View>

          </View>

        </View>
      </View>
    );
  };

  const Phase2 = () => {
    return(
      <View style={styles.container}>

      <View style={styles.subcontainer2}>
      <TextInput style={styles.s2txt1} placeholder='Address'/>
    </View>
    <View style={styles.subcontainer1}>
      <TextInput style={styles.c3txt1} placeholder='City'/>
      <TextInput style={styles.c3txt1} placeholder='State'/>
    </View>
    <View style={styles.subcontainer1}>
      <TextInput style={styles.c3txt1} placeholder='Country'/>
      <TextInput style={styles.c3txt1} placeholder='Pin Code'/>
    </View> 
    </View> 
    )
  }

  const Submit = () => {
    const onSubmit = () => {
      navigation.navigate("Sucessfull");
    };

    return (
      <View style={styles.submit}>
        <TouchableOpacity style={styles.button} onPress={onSubmit}>
          <Text style={styles.btntxt}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <ScrollView style={styles.maincontainer}>
      <Phase1 />
      <Phase2 />
      <Submit />

      
  
    </ScrollView>
  );
};

export default PatientDetails;

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: "#ebedfa",
    padding: 10,
    width:'100%',
    height:'100%',
  },

  container: {
    flexDirection: "row",
    width:'100%',
 
    justifyContent:'space-between'
  },
  subcontainer1:{
    width:'50%',

  },
  subcontainer2:{
    width:'40%',
    // justifyContent:'center',
    alignItems:'center'


  },
  subcontainer1txt: {
    fontSize: 15,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#d9d9d9",
    alignItems: "center",
    textAlign: "center",
    marginTop: 10,
  },

  submit: {
    borderRadius: 20,
    padding: 10,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  icon:{
    justifyContent:'center',
    alignItems:'center',
    width:100,
    backgroundColor:'white',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#d9d9d9",
    alignContent:'center'
  },
  btntxt: {
    backgroundColor: "#324ae5",
    color: "white",
    width: 200,
    textAlign: "center",
    padding: 10,
    fontSize: 20,
    borderRadius: 30,
  },
  gender: {
    flexDirection: "row",
  },

  doctor:{
    
    width:'100%',
    color:'black',
    padding:5,
    marginTop:20,
    shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity:  0.20,
      shadowRadius: 5,
      elevation: 10

  },
  picker:{
    backgroundColor:'white',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#d9d9d9",
    marginTop:10,

  }
});
