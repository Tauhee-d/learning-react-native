import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { MaterialIcons } from "@expo/vector-icons";
 

const Dashboard = ({navigation}) => {
  return (
    <View style={Styles.maincontainer}>
      <View style={Styles.container}>
        {/* <View style={Styles.containerheading}>
          <Ionicons style={Styles.icon} name="md-menu-sharp" size={25} />
          <Text style={Styles.heading}> Dashboard</Text>
          <Text></Text>
        </View> */}

        <View style={Styles.subcontainer}>
          <Text style={Styles.subheading}> Patient Options</Text>
          <View style={Styles.component}>
            <View style={Styles.subcomponent}>
              <TouchableOpacity onPress={() => navigation.navigate('Select Patient Type')}>
                <Ionicons style={Styles.textcolor} name="person-add" size={25} />
                <Text style={Styles.textcolor}>Add Patient</Text>
              </TouchableOpacity>
            </View>

            <View style={Styles.subcomponent}>
              <TouchableOpacity onPress={ () => navigation.navigate('Search For Patient')}>
                <Ionicons
                  style={Styles.textcolor}
                  name="person-remove"
                  size={25}
                />
                <Text style={Styles.textcolor}>OutPatients List</Text>
              </TouchableOpacity>
            </View>

            <View style={Styles.subcomponent}>
              <TouchableOpacity onPress={ () => navigation.navigate('Search For Patient')}>
                <Ionicons style={Styles.textcolor} name="person" size={25} />
                <Text style={Styles.textcolor}>InPatients List</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={Styles.subcontainer}>
          <Text style={Styles.subheading}> Patient History</Text>
          <View style={Styles.component1}>
            <View style={Styles.subcomponent}>
              <TouchableOpacity>
                <Ionicons
                  style={Styles.textcolor}
                  name="receipt-outline"
                  size={25}
                />
                <Text style={Styles.textcolor}>Medical Records</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={Styles.subcontainer}>
          <Text style={Styles.subheading}> Payment Options</Text>
          <View style={Styles.components}>
            <View style={Styles.subcomponent}>
              <TouchableOpacity 
                onPress={ () => navigation.navigate('Search For Patient')}
              >
                <MaterialIcons
                  style={Styles.textcolor}
                  name="payments"
                  size={25}
                />
                <Text style={Styles.textcolor}>Payments</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  maincontainer: {
    height: "100%",
    width: "100%",
    justifycontent: "center",
    alignItems: "center",
    backgroundColor: "#ebedfa",
  },
  container: {
    height: "100%",
    width: "100%",
    marginTop: "10%",
  },
  containerheading: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon:{
    marginLeft:20
  },
  heading: {
    fontSize: 20,
    marginRight:'40%'
  },
  subcontainer: {},
  subheading: {
    fontSize: 15,
    marginLeft: "5%",
    marginTop: "10%",
  },
  component: {
    marginTop: "5%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  components: {
    marginTop: "5%",
    flexDirection: "row",
    marginLeft: "9%",
  },
  component1: {
    marginTop: "5%",
    marginLeft: "9%",
  },
  subcomponent: {
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    borderRadius: 20,
    backgroundColor: "white",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity:  0.20,
    shadowRadius: 5,
    elevation: 8
  },
  subcomponents: {
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    textAlign: "center",
    marginLeft: 30,
    backgroundColor: "white",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity:  0.20,
    shadowRadius: 5,
    elevation: 10
  },
 
  textcolor: {
    color: "#8f9094",
    textAlign: "center",
  },
 
});

export default Dashboard;
