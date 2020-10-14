import React, { useState } from 'react'
import { Text, Button } from 'react-native'
import Estilo from './Estilo'

export default props => {

    const [numero , setNumero] = useState(props.inicial)
    //let numero = props.inicial

    const inc = () => setNumero(numero + 1)
    const dec = () => setNumero(numero - 1)

    return (
        <>
            <Text style={Estilo.txtGrande}>{numero}</Text>
            <Button title="mais" onPress={inc} />
            <Button title="menos" onPress={dec} />
        </>
    )
}