import axios from "axios";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Toast from "react-native-toast-message";


const Signin = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const clearTextInputs = () => {
    setEmail("");
    setPassword("");
  };

  const handleFormSubmit = () => {

    axios.post(
      "http://localhost:8000/user/signin",
      {
        email: email,
        password: password
      }

    )
      .then((res) => {
        if (res.status === 200) {

          clearTextInputs();
          Toast.show({
            type: "done",
            position: "top",
            topOffset: 0,
            text1: res.statusText,
          });
          navigation.navigate('Shoptab')

        } else {

          Toast.show({
            type: "warning",
            position: "top",
            topOffset: 0,
            text1: res.statusText,
          });
        }

      }).catch((error) => {
        Toast.show({
          type: "warning",
          position: "top",
          topOffset: 0,
          text1: error.message,
        });
      })



  };


  return (
    <>
      <View style={style.maincontainer}>

        <Text style={style.mainheading}>Sign in</Text>

        <View style={style.inputcontainer}>
          <Text style={style.labels}>Enter your email</Text>
          <TextInput
            style={style.inputstyle}
            value={email}
            onChangeText={setEmail}
            keyboardType={"email-address"}
          />
        </View>
        <View style={style.inputcontainer}>
          <Text style={style.labels}>Enter your password</Text>
          <TextInput
            style={style.inputstyle}
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
        </View>

        <TouchableOpacity style={style.button} onPress={handleFormSubmit}>
          {/* => navigation.navigate('Shoptab') */}
          <Text style={style.buttontext}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const style = StyleSheet.create({
  maincontainer: {
    height: "100%",
    paddingTop: 30,
    paddingHorizontal: 30,
  },
  mainheading: {
    fontSize: 40,
    paddingTop: 40,
    paddingBottom: 20,
    textAlign: "center",
    marginTop: 30,
  },
  labels: {
    fontSize: 20,
    marginTop: 15,
    marginBottom: 5,
    lineHeight: 25,
  },
  inputstyle: {
    borderColor: "black",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 3,
  },
  button: {
    fontSize: 40,
    marginTop: 50,
  },
  buttontext: {
    borderRadius: 15,
    fontSize: 20,
    borderWidth: 1,
    textAlign: "center",
    color: "white",
    backgroundColor: "black",
    padding: 10,
  },
  inputcontainer: {},
});

export default Signin;
