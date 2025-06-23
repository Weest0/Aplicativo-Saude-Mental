import { StyleSheet, Text, TextInput, View } from "react-native";

const CampoTexto = ({nome, funcao, valor}) => {
    return(
        <View>
            <TextInput placeholder={nome} style={styles.campo} onChangeText={(text) => funcao(text)} value={valor}/>
        </View>
    )
}

const styles = StyleSheet.create({
    campo:{
        borderColor: "black",
        borderWidth: 1,
        width: 300,
        height: 50,
        marginBottom: 10,
        borderRadius: 8,
        paddingLeft: 10
    }
})

export default CampoTexto;