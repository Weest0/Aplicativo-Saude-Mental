import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginPage from './screens/LoginPage';
import HomePage from './screens/HomePage';

export default function App() {
  return (
    <HomePage />
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
