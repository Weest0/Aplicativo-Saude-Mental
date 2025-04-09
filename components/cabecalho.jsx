import { Image, StyleSheet, Text, View } from "react-native";

const logo = require("../assets/logo.png");
const Cabecalho = () => {
    return(
        <View style={styles.container}>
            <Image source={logo} style={styles.logo}></Image>
        </View>
    );
};

const styles = StyleSheet.create({
    logo:{
        width:200,
        height:200
    },
    container:{
        height:400
    }
});

export default Cabecalho;