import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Sidebar = ({...props}) => {
    const handleLogout = () => {
        navigation.navigate('HomeScreen')
        console.log("logout");
    }
    const navigation = useNavigation()
  return (
    <DrawerContentScrollView {...props}>
        <View>
            <Text style={styles.heading}>thohid</Text>
            <Text>Thohid@gmail.com</Text>
            <DrawerItemList {...props}/>
                <DrawerItem label='logout' onPress={handleLogout}/>
            
        </View>
    </DrawerContentScrollView>
  )
}

export default Sidebar

const styles = StyleSheet.create({
    heading:{
        fontSize:25
    }
})