import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Home() {

  const navigation = useNavigation();

  function irImc() {
    navigation.navigate('IMC');
  }
  function irReferencia() {
    navigation.navigate('REFERENCIA')
  }

  return (
    <View style={styles.container}>

      <TouchableOpacity
        onPress={irImc}
        style={styles.botao}
      >
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>
            Calculadora IMC
          </Text>
        </View>
      </TouchableOpacity>

      <Text> </Text>

      <TouchableOpacity
        onPress={irReferencia}
        style={styles.botao}
      >
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>
            Referencia
          </Text>
        </View>
      </TouchableOpacity>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  //Definindo Botão\\
  botao: {
    width: 230,
    height: 50,
    borderColor: '#000000',
    borderWidth: 2,
    borderRadius: 25
  },
  //V Defindo AREA DE DENTRO do botão V\\
  btnArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  //V Definindo TEXTO DETRO do botão V\\
  btnTexto: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#000000'

  },
  txtInput: {
    height: 45,
    borderWidth: 1,
    margin: 10,
    padding: 10,
    fontSize: 20
  }
});