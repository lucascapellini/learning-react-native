import React from 'react'
import { Button } from 'react-native'

export default (props) => {

    function executar(){
        console.warn('Executado!!!!!')
    }
    return (
        <>
            <Button
                title="Executar 1!"
                onPress={executar}
            />
            <Button
                title="Executar função 2!"
                onPress={function() {
                    console.warn('aiaiaiaiiii papito')
                }}
            />
        </>
    )
}