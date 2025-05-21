import { StyleSheet, Text, View } from "react-native";

const MensagemIA = ({texto}) => {
    return(
        <View style={styles.mensagem}>
            <Text>{texto}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    mensagem:{
        maxWidth: "60%",
        backgroundColor: "#A8DADC",
        borderRadius: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "start",
        padding: 15,
        marginBottom: 10,
    }
})

export default MensagemIA;