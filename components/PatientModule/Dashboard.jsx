import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { MaterialIcons } from "@expo/vector-icons";

const Dashboard = () => {
  return (
    <View style={Styles.maincontainer}>
      <View style={Styles.container}>
        <View style={Styles.containerheading}>
          <Ionicons name="md-menu-sharp" size={32} />
          <Text style={Styles.heading}>Patient Dashboard</Text>
        </View>
        <View style={Styles.subcontainer}>
          <Text style={Styles.subheading}> Patient Options</Text>
          <View style={Styles.component}>
            <View style={Styles.subcomponentadd}>
              <TouchableOpacity>
                <Ionicons style={Styles.texticon} name="person-add" size={32} />
                <Text style={Styles.texticon}>Add Patient</Text>
              </TouchableOpacity>
            </View>

            <View style={Styles.subcomponent}>
              <TouchableOpacity>
                <Ionicons
                  style={Styles.textcolor}
                  name="person-remove"
                  size={32}
                />
                <Text style={Styles.textcolor}>OutPatients</Text>
              </TouchableOpacity>
            </View>

            <View style={Styles.subcomponent}>
              <TouchableOpacity>
                <Ionicons style={Styles.textcolor} name="person" size={32} />
                <Text style={Styles.textcolor}>InPatients</Text>
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
                  size={32}
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
              <TouchableOpacity>
                <MaterialIcons
                  style={Styles.textcolor}
                  name="payments"
                  size={32}
                />
                <Text style={Styles.textcolor}>Make payment</Text>
              </TouchableOpacity>
            </View>

            <View style={Styles.subcomponents}>
              <TouchableOpacity>
                <MaterialIcons
                  style={Styles.textcolor}
                  name="history"
                  size={32}
                />
                <Text style={Styles.textcolor}>Payment History</Text>
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
    justifyContent: "space-evenly",
  },
  heading: {
    fontSize: 30,
    fontFamily: "Regular",
  },
  subcontainer: {},
  subheading: {
    fontSize: 21,
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
  subcomponentadd: {
    width: 80,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    borderRadius: 20,
    backgroundColor: "#324ae6",
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
  texticon: {
    textAlign: "center",
    color: "white",
  },
});

export default Dashboard;
