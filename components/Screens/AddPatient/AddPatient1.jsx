import { StyleSheet, Text, View, TouchableOpacity, Modal } from 'react-native'
import { useState } from 'react'
import { TextInput } from 'react-native-paper'
import React from 'react'
import Calender from 'react-native-calendars/src/calendar'
import { MaterialIcons } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";


const AddPatient1 = ({ navigation }) => {
    const Phase1 = () => {

        const handleFormNext = () => {
            navigation.navigate('Personal Detail')
        }
        const [showModal, setShowModal] = useState(false)



        return (
            <View style={styles.container}>
                <View style={styles.subcontainer}>
                    <View style={styles.topbar}>
                        <View style={styles.topbartxt}>
                            <Text style={styles.topbartxtline}>Patient Details </Text>
                            <Text style={styles.topbartxtline}>Personal Details</Text>
                            <Text style={styles.topbartxtline}>Medical records</Text>
                        </View>
                        <View style={styles.topbarline}>
                            <Text style={styles.topbarline1}></Text>
                            <Text style={styles.topbarline2}></Text>
                            <Text style={styles.topbarline3}></Text>
                        </View>
                    </View>


                    <TextInput style={styles.textinput} placeholder='First Name' />


                    <TextInput style={styles.textinput} placeholder='Last Name' />
                    <TextInput style={styles.textinput} placeholder='Email' />
                    <View style={styles.modal}>
                        <TextInput style={styles.textinput1} placeholder='DOB' />
                        <TouchableOpacity style={styles.btncalender} onPress={() => setShowModal(true)}>
                            <MaterialIcons style={styles.textcolor} name="calendar-today" size={25} />
                            <Modal visible={showModal} >
                                <Calender style={styles.Calender}
                                    onDayPress={date => {
                                        console.log(date)
                                        setShowModal(false)
                                    }}
                                    disableArrowRight={true}
                                />
                            </Modal>
                        </TouchableOpacity>

                    </View>
                    <View style={styles.modal}>

                        <TextInput style={styles.textinput2} placeholder='Weight' />
                        <Ionicons style={styles.symbol} name="male" size={25} />
                        <Ionicons style={styles.symbol} name="female" size={25} />
                        <Ionicons style={styles.symbol} name="male-female" size={25} />
                    </View>
                    <TextInput style={styles.textinput} placeholder='Phone Number' />
                    <TextInput style={styles.textinput} placeholder='Unique Health ID' />
                    <TextInput style={styles.textinput} placeholder='Patient ID' />
                </View>
                <View style={styles.button}>
                    <TouchableOpacity style={styles.btncontainer} onPress={handleFormNext}>
                        <Text style={styles.btntxt}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    return (
        <View style={styles.maincontainer}>
            <Phase1 />


        </View>
    )
}

export default AddPatient1

const styles = StyleSheet.create({
    maincontainer: {
        margin: 20,
    },
    topbartxt: {
        flexDirection: 'row'
    },
    topbartxtline: {
        width: "33%",
        textAlign: 'center',

    },

    topbarline: {
        flexDirection: 'row',
        // borderWidth: 1,
        borderRadius: 6,
        marginTop: 10,
        marginBottom: 5

    },
    topbarline1: {
        backgroundColor: 'blue',
        width: '33%',
        // borderWidth: 1,
        borderRadius: 10
    },
    topbarline2: {
        backgroundColor: 'white',
        width: '33%'
    },
    topbarline3: {
        backgroundColor: 'white',
        width: '34%',
        borderRadius: 10
    },

    container: {
        height: '100%',
        width: '100%',
        justifyContent: 'space-between',
    },
    subcontainer: {
        // alignItems: 'baseline'
        flex: 3
    },
    textinput: {
        backgroundColor: 'white',
        marginTop: 10,

    },

    button: {
        // alignItems: 'baseline',
        flex: 1,
    },
    btncontainer: {
        backgroundColor: 'blue',
        padding: 15,
        // height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '30%',
        borderRadius: 10



    },
    modal: {
        flexDirection: 'row',
        width: '100%',
        marginTop: 10,
    },
    btncalender: {
        width: '19%',
        backgroundColor: 'white',
        padding: 15,
        // height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 2,
        // borderRadius: 10



    },
    textinput1: {
        backgroundColor: 'white',
        width: '80%'

    },
    textinput2: {
        backgroundColor: 'white',
        width: '50%'

    },
    symbol: {
        marginLeft: 10,
        padding: 15,

        // justifyContent: 'center',
        // alignItems: 'center'
    },
    btntxt: {
        color: 'white',
        textAlign: 'center',
        alignItems: 'baseline',
        fontSize: 20

    },
    Calender: {
        margin: 40,
        // marginBottom: 20,
        borderWidth: 1,
        borderRadius: 10
    }
})