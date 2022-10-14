

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  FlatList,
  ScrollView,
} from "react-native";
import RadioForm from "react-native-simple-radio-button";

import { Ionicons, Fontisto, MaterialIcons } from "@expo/vector-icons";
// import {Picker} from"@react-native-picker/picker";
import { useEffect, useState } from "react";
import PropsType from "prop-types";
import axios from "axios";

const SearchForPatient = ({ navigation }) => {
  const [responseData, setResponseData] = useState();
  const [loading, setLoading] = useState(false);

  const handleOnClick = () => {
    // navigation.navigate("Patient Details");
    console.log("clicked");
  };

  const patientList = () => {
    setLoading(true);
    axios
      .get("http://localhost:8000/addOP")
      .then((response) => {
        setResponseData(response.data);
        setLoading(false);
        // setResponseData(response.data)
        // console.log(response.data);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    patientList();
  }, []);
  const SearchBar = (props) => {
    return (
      <View style={style.search}>
        <Fontisto name="search" size={25} />
        <TextInput value={props.value} placeholder="search" />
        {props.editing ? (
          <TouchableOpacity onPress={props.onClear}>
            <Text>Clear</Text>
          </TouchableOpacity>
        ) : null}
        {props.loading ? <ActivityIndicator /> : null}
      </View>
    );
  };

  SearchForPatient.PropsType = {
    onChangeText: PropsType.func.isRequired,
    value: PropsType.string.isRequired,
    loading: PropsType.bool.isRequired,
    editing: PropsType.bool.isRequired,
    onClear: PropsType.func.isRequired,
  };

  const Body = (props) => {
    return (
      <View style={style.container}>
        {loading ? (
          <Text>Loading...</Text>
        ) : (
          <FlatList
            data={responseData}
            renderItem={({ item }) => (
              //  {
              //   return <Text> {item.fName}</Text>;
              // }
              <TouchableOpacity onPress={handleOnClick}>
                <View style={style.body}>
                  <View style={style.iconconatiner}>
                    <Ionicons name="person" size={45} />
                  </View>
                  <View style={style.txtcontainer}>
                    <Text style={style.heading}>
                      {item.fName + " " + item.lName}
                    </Text>
                    <Text style={style.txt}>{item.patientID}</Text>
                    <Text style={style.txt}>UHID:{item.uniqueHID}</Text>
                    <Text style={style.txt}>Dr.ID{item.doctorID}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        )}
      </View>
    );
  };

  return (
    <View style={style.maincontainer}>
      <View style={style.container}>
        <SearchBar />
        <Body />
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  maincontainer: {
    height: "100%",
    width: "100%",
    justifycontent: "center",
    alignItems: "center",
    backgroundColor: "#ebedfa",
    padding: 10,
  },
  search: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    borderWidth: 1,
    padding: 5,
    borderRadius: 30,
    backgroundColor: "white",
  },

  container: {
    height: "100%",
    width: "100%",
    padding: 5,
  },
  subcontainer: {
    backgroundColor: "white",
    margin: 5,
    justifycontent: "center",
    alignItems: "center",
    flexDirection: "row",
    padding: 5,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  heading: {
    fontSize: 20,
  },
  txtcontainer: {
    marginLeft: 20,
  },
  dateAndGender: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  gender: {
    flexDirection: "row",
  },
  body: {
    flexDirection: "row",
    backgroundColor: "white",
    margin: 4,
    padding: 4,
  },
  iconconatiner: {
    justifyContent: "center",
    marginLeft: 20,
  },
});

export default SearchForPatient;