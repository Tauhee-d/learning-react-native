import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
// import RNPickerSelect from "react-native-picker-select";
import { Picker } from "@react-native-picker/picker";
import axios from "axios";
import Toast from "react-native-toast-message";

const PatientDetails = ({ navigation }) => {
  const clearTextInputs = () => {
    setPatientID("");
    setUniqueHID(""),
      setFName(""),
      setLName(""),
      setEmail(""),
      setPhone(""),
      setAge(""),
      setWeight(""),
      setGender(""),
      setGName(""),
      setGEmail(""),
      setGPhone(""),
      setAddress(""),
      setCity(""),
      setState(""),
      setCountry(""),
      setPin(""),
      setDoctorID(""),
      setDepartmentID("");
  };
  const handleFormSubmit = () => {
    if (
      patientID &&
      uniqueHID &&
      fName &&
      lName &&
      email &&
      phone &&
      age &&
      weight &&
      gender &&
      gName &&
      gEmail &&
      gPhone &&
      address &&
      city &&
      state &&
      country &&
      pin &&
      doctorID &&
      departmentID
    ) {
      console.log(" detail saved");
      clearTextInputs();
      Toast.show({
        type: "done",
        position: "top",
        topOffset: 0,
        text1: "login Sucessfull",
      });

      ApiPatientDetails();
      navigation.navigate("Sucessfull");
    } else {
      console.log("All fields are required");
      Toast.show({
        type: "warning",
        position: "top",
        topOffset: 0,
        text1: "All fields are required!",
      });
    }
  };

  const toastConfig = {
    warning: ({ text1, text2 }) => (
      <View
        style={{
          height: 30,
          width: "100%",
          backgroundColor: "orange",
          padding: 4,
        }}
      >
        <Text>{text1}</Text>
        <Text>{text2}</Text>
      </View>
    ),
    done: ({ text1, text2 }) => (
      <View
        style={{
          height: 30,
          width: "100%",
          backgroundColor: "green",
          padding: 4,
        }}
      >
        <Text>{text1}</Text>
        <Text>{text2}</Text>
      </View>
    ),
  };

  const [patientID, setPatientID] = useState("");
  const [uniqueHID, setUniqueHID] = useState("");
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState("");
  const [gName, setGName] = useState("");
  const [gEmail, setGEmail] = useState("");
  const [gPhone, setGPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [pin, setPin] = useState("");
  const [doctorID, setDoctorID] = useState("");
  const [departmentID, setDepartmentID] = useState("");
  console.log("patientID:", patientID);

  const ApiPatientDetails = () => {
    axios
      .post(
        "http://localhost:8000/addOP",

        {
          patientID: patientID,

          uniqueHID: uniqueHID,
          fName: fName,
          lName: lName,
          email: email,
          phone: phone,
          age: age,
          weight: weight,
          gender: gender,
          gName: gName,
          gEmail: gEmail,
          gPhone: gPhone,
          address: address,
          city: city,
          state: state,
          country: country,
          pin: pin,
          doctorID: doctorID,
          departmentID: departmentID,
        }
      )
      .then((res) => console.log("data submitted"))
      .catch((err) => console.log("error", err));
  };
  // const handle

  const Phase1 = () => {
    return (
      <View style={styles.container}>
        <Toast config={toastConfig} />
        <View style={styles.subcontainer1}>
          <TextInput
            value={patientID}
            style={styles.subcontainer1txt}
            onChangeText={(e) => {
              setPatientID(e);
            }}
            placeholder="Patient Id"
          />
          <TextInput
            style={styles.subcontainer1txt}
            placeholder="Unique Health Id"
            value={uniqueHID}
            onChangeText={(e) => setUniqueHID(e)}
          />
          <TextInput
            value={fName}
            onChangeText={(e) => {
              setFName(e);
            }}
            style={styles.subcontainer1txt}
            placeholder="First Name"
          />
          <TextInput
            value={lName}
            onChangeText={(e) => {
              setLName(e);
            }}
            style={styles.subcontainer1txt}
            placeholder="Last Name"
          />
          <TextInput
            value={email}
            onChangeText={(e) => {
              setEmail(e);
            }}
            style={styles.subcontainer1txt}
            placeholder="Email"
          />
          <TextInput
            style={styles.subcontainer1txt}
            placeholder="Phone Number"
            value={phone}
            onChangeText={(e) => {
              setPhone(e);
            }}
          />
          <TextInput
            style={styles.subcontainer1txt}
            placeholder="Guardian Name"
            value={gName}
            onChangeText={(e) => {
              setGName(e);
            }}
          />
          <TextInput
            style={styles.subcontainer1txt}
            placeholder="Guardian Email"
            value={gEmail}
            onChangeText={(e) => {
              setGEmail(e);
            }}
          />
          <TextInput
            style={styles.subcontainer1txt}
            placeholder="Guardian Phone no"
            value={gPhone}
            onChangeText={(e) => {
              setGPhone(e);
            }}
          />
        </View>
        <View style={styles.subcontainer2}>
          <View style={styles.iconcontainer}>
            <MaterialCommunityIcons
              style={styles.icon}
              name="human-male"
              size={70}
            />
          </View>
          <TextInput
            value={age}
            onChangeText={(e) => {
              setAge(e);
            }}
            style={styles.subtxt}
            placeholder="Age"
          />
          <TextInput
            value={weight}
            onChangeText={(e) => {
              setWeight(e);
            }}
            style={styles.subtxt}
            placeholder="Weight"
          />

          <View style={styles.doctor}>
            <Text style={styles.txt}>Gender:</Text>
            <View style={styles.picker}>
              <Picker
                selectedValue={gender}
                onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
              >
                <Picker.Item label="Male" value="Male" />
                <Picker.Item label="Female" value="Female" />
              </Picker>
            </View>
          </View>
          <View style={styles.doctor}>
            <Text style={styles.txt}>Doctor:</Text>
            <View style={styles.picker}>
              {/* <Picker selectedValue={doctorID} onValueChange={(itemValue, itemIndex) => setDoctorID(itemValue)}>
                <Picker.Item label="Dr.Zab" value="Dr.Zab" />
                <Picker.Item label="Dr.Mac" value="Dr.Mac" />
              </Picker> */}
            </View>
          </View>
          <View style={styles.Department}>
            <Text style={styles.txt}>Department:</Text>
            <View style={styles.picker}>
              {/* <Picker selectedValue={departmentID} onValueChange={(itemValue, itemIndex) => setDepartmentID(itemValue)}  >
                <Picker.Item label="Surgery" value="Surgery" />
                <Picker.Item label="Neurology" value="Neurology" />
              </Picker> */}
            </View>
          </View>
        </View>
      </View>
    );
  };

  const Phase2 = () => {
    return (
      <View>
        <View style={styles.phase2container2}>
          <TextInput
            value={address}
            onChangeText={(e) => {
              setAddress(e);
            }}
            style={styles.s2txt1}
            placeholder="Address"
          />
        </View>
        <View style={styles.container1}>
          <View style={styles.phase2container1}>
            <TextInput
              value={city}
              onChangeText={(e) => {
                setCity(e);
              }}
              style={styles.c3txt1}
              placeholder="City"
            />
            <TextInput
              value={state}
              onChangeText={(e) => {
                setState(e);
              }}
              style={styles.c3txt1}
              placeholder="State"
            />
          </View>
          <View style={styles.phase2container1}>
            <TextInput
              value={country}
              onChangeText={(e) => {
                setCountry(e);
              }}
              style={styles.c3txt1}
              placeholder="Country"
            />
            <TextInput
              value={pin}
              onChangeText={(e) => {
                setPin(e);
              }}
              style={styles.c3txt1}
              placeholder="Pin Code"
            />
          </View>
        </View>
      </View>
    );
  };

  const Submit = () => {
    return (
      <View style={styles.submit}>
        <TouchableOpacity style={styles.button} onPress={handleFormSubmit}>
          {/* <TouchableOpacity style={styles.button} onPress={()=>{
          ApiPatientDetails()
        }}> */}
          {/* <TouchableOpacity style={styles.button} onPress={onSubmit}> */}
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
    width: "100%",
    height: "100%",
  },

  container: {
    flexDirection: "row",
    width: "100%",
    marginTop: 30,
    justifyContent: "space-between",
  },
  container1: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  subcontainer1: {
    width: "50%",
  },
  subcontainer2: {
    width: "40%",
    // justifyContent:'center',
    alignItems: "center",
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
  subtxt: {
    fontSize: 15,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#d9d9d9",
    alignItems: "center",
    textAlign: "center",
    marginTop: 10,
    width: 130,
  },

  submit: {
    borderRadius: 20,
    padding: 10,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  iconcontainer: {
    backgroundColor: "white",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#d9d9d9",
    justifyContent: "center",
    alignItems: "center",
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
  genderContainer: {
    marginTop: 10,
    width: 100,
  },
  genderheading: {
    padding: 1,
  },
  gender: {
    flexDirection: "row",
    padding: 2,
    justifyContent: "space-between",
    width: 100,
  },
  phase2container2: {
    backgroundColor: "white",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#d9d9d9",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    marginTop: 10,
  },

  c3txt1: {
    backgroundColor: "white",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#d9d9d9",
    textAlign: "center",
    padding: 10,
    width: 160,
    marginTop: 10,
  },

  doctor: {
    width: "100%",
    color: "black",
    padding: 5,
    marginTop: 20,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 10,
  },
  Department: {
    width: "100%",
    color: "black",
    padding: 5,
    marginTop: 20,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 10,
  },
  picker: {
    backgroundColor: "white",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#d9d9d9",
    marginTop: 10,
  },
});
