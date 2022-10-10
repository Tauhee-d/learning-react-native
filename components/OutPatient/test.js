import React from 'react'
import { View } from 'react-native'

const Test=({item}) => {
  return (
    <View>
           <TouchableOpacity onPress={ () => navigation.navigate('Patient Details')}
          style={style.subcontainer}>
                <View>
                  <Ionicons name='person' size={35} />
                </View>
                <View style={style.txtcontainer}>
                  <Text style={style.heading}>Abc</Text>
                  <Text style={style.txt}>{item.pa}</Text>
                  <Text style={style.txt}>UHID:</Text>
                  <Text style={style.txt}>Dr.xyz</Text>
                  <Text style={style.txt}>Added On:</Text>
                </View>
          </TouchableOpacity>
    </View>
  )
}

export default Test