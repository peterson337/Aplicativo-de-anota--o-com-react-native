import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, Button, Platform, TouchableOpacity } from 'react-native';

export default function App() {

      const [estado, setEstado] = useState('leitura');
      const [anotacao, setAnotacao] = useState('Minha anotação');

        return (
          <View style={styles.container}>

            {
              estado == "leitura"?
              <View>
                <View>
              <Text>Aplicativo de anotação</Text>
              </View>

              <View>
                <Text>
                  {anotacao}
                </Text>
              </View>

              <TouchableOpacity>
                <Text>
                  +
                </Text>
              </TouchableOpacity>

              </View>

              :

              estado == "atualizando"?
              <View>

              </View>

              :

              <View></View>

            }
           
          </View>
        ); 
 
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  Image: {
      width: '10px',
      height: '10px',
  }

});
