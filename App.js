import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';

export default function App() {
  const [estado, setEstado] = useState('leitura');
  const [anotacao, setAnotacao] = useState('Um substantivo é uma classe gramatical que se refere a uma pessoa, lugar, coisa, animal, ideia ou qualquer entidade que possa ser nomeada. Ele desempenha o papel principal na estrutura das frases, pois é geralmente o sujeito ou o objeto direto das ações expressas pelos verbos.');
  return (
    <View style={styles.container}>
      <StatusBar hidden />
        
      {
      estado == 'leitura' ? (
        <View style={styles.content}>
            <Text style={styles.header}>Aplicativo de anotação</Text>

          <View >
            <Text style={styles.anotacao}>{anotacao}</Text>
          </View>

          <TouchableOpacity style={styles.btnAnotacao} 
            onPress={() => setEstado('atualizando')}>
            <Text style={styles.btnAnotacaoTexto} 
            >+</Text>
          </TouchableOpacity>
        </View>
      ) : estado == 'atualizando' ? (
        <View style={styles.content}>
          
           <Text style={styles.header}>Aplicativo de anotação</Text>
           

          <TouchableOpacity
           style={styles.btnSalvar}
           onPress={() => setEstado('leitura')}>
             <Text style={{textAlign: 'center', color: 'white',}}>
             Salvar
              </Text> 
          </TouchableOpacity>

        </View>
      ) : (
        <View></View>
      )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  
  header: {
    backgroundColor: '#008cff',
    width: '100%',
    padding: 20,
    textAlign: 'center',
    color: 'white',
    fontSize: 18,
  },

  content: {
    flex: 1,
  },

  anotacao: {
    marginHorizontal: 20,
    marginTop: 10,
    fontSize: 13,
  },

  btnAnotacao: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    width: 50,
    height: 50,
    backgroundColor: '#008cff',
    borderRadius: 25,
  },

  btnAnotacaoTexto: {
    color: 'white',
    position: 'relative',
    textAlign: 'center',
    top: 3,
    fontSize: 30,
  },

  btnSalvar: {
    position: 'absolute',
    width: 100,
    right: 20,
    bottom: 20,
    padding: 10,
    borderRadius: 25,
    backgroundColor: '#008cff',
  },


  /* image: {
    width: 10,
    height: 10,
  }, */
});
