import { StyleSheet, Text, View } from "react-native";

const Mensagem = ({texto}) => {
    return(
        <View style={styles.mensagem}>
            <Text>{texto}</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    mensagem:{
        backgroundColor: "#E1DFDC",
        borderRadius: 20,
        marginLeft: 30,
        display: "flex",
        justifyContent: "center",
        alignItems: "end",
        padding: 15,
        marginBottom: 10,
        position: "relative",
        left: "30%",
        maxWidth: "60%",
    }
})

export default Mensagem;