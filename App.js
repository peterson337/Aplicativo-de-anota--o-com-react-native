import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button, TextInput} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function App() {
  const [estado, setEstado] = useState('leitura');
  const [anotacao, setAnotacao] = useState('');

  useEffect(() => {
    // Quando inicializar o app queremos que leia a key "anotacao".
    const loadAnotacao = async () => {
      try {
        const anotacaoLeitura = await AsyncStorage.getItem('anotacao');
        setAnotacao(anotacaoLeitura);
      } catch (erro) {
        console.log(erro);
      }
    };

    loadAnotacao();
  }, []);

  const setData = async () => {
    try {
      await AsyncStorage.setItem('anotacao', anotacao);
    } catch (err) {
      console.log(err);
    }
  };

  const atualizarText = () => {
      setEstado('leitura')
      setData();
      alert('A sua anotação foi salva com sucesso.')
  }



  return (
    <View style={styles.container}>
      <StatusBar hidden />
        
      {
      estado == 'leitura' ? (
        <View style={styles.content}>
            <Text style={styles.header}>Aplicativo de anotação</Text>
            {
              anotacao != '' ? (
                <View >
              <Text style={styles.anotacao}>{anotacao}</Text>
            </View>
              ) :(
                <View style={{padding: 20, paddingHorizontal: 80}}>
                <Text style={{opacity: 0.3}}>Nenhuma anotação encontrada</Text>
              </View>
              )
            }
          
          <TouchableOpacity style={styles.btnAnotacao} 
            onPress={() => setEstado('atualizando')}>
              {anotacao == '' ? (
                <Text style={styles.btnAnotacaoTexto} 
                >+</Text>
              ): (
                <Text style={{fontSize: 12, color: 'white', textAlign: 'center', marginTop: 16}} 
                >editar</Text>
              )

              }
            
          </TouchableOpacity>
        </View>
      ) : estado == 'atualizando' ? (
        <View style={styles.content}>
          
           <Text style={styles.header}>Aplicativo de anotação</Text>
           
           <TextInput
            value={anotacao}
            multiline={true}
            numberOfLines={5}
            style={{ padding: 20, height: 300, textAlignVertical: 'top' }}
            onChangeText={(text) => setAnotacao(text)}
            placeholder='Clique aqui para escrever a sua anotação.'
            autoFocus={true}
            />

          <TouchableOpacity
           style={styles.btnSalvar}
           onPress={() => atualizarText()}>
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
