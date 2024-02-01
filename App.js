import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';

const App = () =>{
  return(
    <View style={styles.container}>
      <Text style={styles.textHelloWorld}>Hola Mundo</Text>
      <Text style={styles.textName}>Me llamo Carlo</Text>
      <Text>Estoy practicando creacion de aplicaciones mobiles</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#136066',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textHelloWorld:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    fontFamily: 'Helvetica'
  },
  textName:{
    fontSize: 12,
    fontWeight: '300',
    color: 'red',
  },
  textBody:{
    fontSize: 12,
    fontWeight: '300',
    color: 'red',
  }
})

export default App;