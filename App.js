import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Botoes from './components/botoes';
import Cabecalho from './components/cabecalho';
import Rodape from './components/rodape';

export default function App() {
  return (
    <View style={styles.container}>
      <Cabecalho></Cabecalho>
      <Botoes></Botoes>
      <Rodape></Rodape>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    display: "flex",
    flexDirection:"column",
    fontFamily: "Poppins-Regular"
  }
});
