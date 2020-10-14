import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import MinMax from './components/MinMax'
import Primeiro from './components/Primeiro';
import {Comp1, Comp2, Comp3} from './components/Multi';
import Comparador from './components/Aleatorio'
import Botao from './components/Botao'
import Contador from './components/Contador'

export default () => (
  <SafeAreaView style={style.App}>
    <Contador inicial={100} />
{/*    
    <Botao />
    <Primeiro />
    <MinMax min={1} max={20} />
    <Comparador num1={13} num2={36} />
    <Comp1 />
    <Comp2 />
<Comp3 />*/}
  </SafeAreaView>
);

const style = StyleSheet.create({
  App: {
    backgroundColor: '#A76',
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  }
})