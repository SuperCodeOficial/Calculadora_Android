import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { styles } from '../Theme/appTheme';
import { BotonCalc } from '../Components/BotonCalc';
import { useCalculadora } from '../hooks/useCalculadora';


export const CalculadoraScreen = () => {


  const {
    numero,
    numeroAnterior,
    positivoNegativo,
    limpiar,
    btnDividir, 
    btnMultiplicar,
    btnRestar,
    btnSumar,
    armarNumero,
    calcular,
    btnDelete,
  } = useCalculadora();

  return(
      <View style={styles.calContainer}>
        {
          (numeroAnterior !== '0') && (
          <Text style={styles.resultadoPeq}>{numeroAnterior}</Text>
          )
        }
        <Text style={styles.resultado}
          numberOfLines={1}
          adjustsFontSizeToFit
        >{numero}</Text>

        <View style={styles.fila}>
          <BotonCalc texto="C" color="#9B9B9B" accion = {limpiar}/>
          <BotonCalc texto="+/-"color="#9B9B9B"accion = {positivoNegativo}/>
          <BotonCalc texto="<-" color="#9B9B9B"accion = {btnDelete}/>
          <BotonCalc texto="/" color="#FF9427"accion = {btnDividir}/>
        </View>

        <View style={styles.fila}>
          <BotonCalc texto="7" accion= {armarNumero}/>
          <BotonCalc texto="8"accion= {armarNumero}/>
          <BotonCalc texto="9"accion= {armarNumero}/>
          <BotonCalc texto="X" color="#FF9427"accion = {btnMultiplicar}/>
        </View>

        <View style={styles.fila}>
          <BotonCalc texto="4"accion= {armarNumero}/>
          <BotonCalc texto="5"accion= {armarNumero}/>
          <BotonCalc texto="6"accion= {armarNumero}/>
          <BotonCalc texto="-" color="#FF9427"accion = {btnRestar}/>
        </View>

        <View style={styles.fila}>
          <BotonCalc texto="1"accion= {armarNumero}/>
          <BotonCalc texto="2"accion= {armarNumero}/>
          <BotonCalc texto="3"accion= {armarNumero}/>
          <BotonCalc texto="+" color="#FF9427"accion = {btnSumar}/>
        </View>

        <View style={styles.fila}>
          <BotonCalc texto="0"accion= {armarNumero} ancho/>
          <BotonCalc texto="."accion= {armarNumero}/>
          <BotonCalc texto="=" color="#FF9427"accion = {calcular}/>
        </View>
      </View>
  )
};

