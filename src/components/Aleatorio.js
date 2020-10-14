import React from 'react'
import { Text } from 'react-native'

import Fonte from './Estilo'

export default (props) => {

    const square = Math.sqrt(props.num1 + Math.pow(props.num2, 2))
    const aleatorio = parseInt(square * Math.random())
    return <Text style={Fonte.txtGrande}>
            O valor aleatorio é {aleatorio}
        </Text>
}