import React from 'react'
import { Text } from 'react-native'

import Fonte from './Estilo'
function minMax(param){
    return  <Text style={Fonte.txtGrande}>
                O valor {param.max} é maior que o valor {param.min}!
            </Text>
}

export default minMax