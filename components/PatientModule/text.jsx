import { useState } from 'react'
import {View,Text,StyleSheet} from 'react-native'
import { SelectListProps } from 'react-native-dropdown-select-list'

const text = () =>{
    const [selected,setSelected] = useState()
    const data = [
        {key:1,value:'kkk'},
        {key:2,value:'kkg'},
        {key:3,value:'kkkf'},
        {key:4,value:'kkkd'},
    ];
    return(
        <View style={Styles.maincontainer}>
            <Text>hiii</Text>
            <SelectListProps  data={data} setSelected={setSelected}/>
        </View>
    )
}

const Styles=StyleSheet.create({
    maincontainer:{
        height:'100%',
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: "#ebedfa",
    },
})

export default text;