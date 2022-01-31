import React from 'react';
import { View, Text, SafeAreaView, StatusBar } from 'react-native';
import { CalculadoraScreen } from './src/Screens/CalculadoraScreen';
import { styles } from './src/Theme/appTheme';

 const App = () => {
  return (
    <SafeAreaView style={styles.fondo}>
        <StatusBar backgroundColor='black'/>
        <CalculadoraScreen></CalculadoraScreen>
    </SafeAreaView>
  )
};
export default App;