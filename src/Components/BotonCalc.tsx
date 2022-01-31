import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../Theme/appTheme';

interface Props{
    texto: string;
    color?: string;
    ancho?: boolean;
    accion: (numeroTexto: String)=> void;
  }

export const BotonCalc = ({texto, color= '#9B9B9B', ancho = false, accion}: Props) =>
 {
  return (
    <TouchableOpacity
      onPress={() => accion(texto)}
    >
    <View style=
    {{
      ...styles.boton,
      backgroundColor: color,
      width: (ancho)? 140 : 70
    }}>
    <Text style={{
      ...styles.botonTexto,
      color: (color === '#9B9B9B') ? 'black' : 'white'
      }}>
      {texto}
    </Text>
  </View>
    </TouchableOpacity>
  )
};
