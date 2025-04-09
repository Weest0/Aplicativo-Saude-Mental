import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const logoGoogle = require("../assets/icone-google.png");
const logoEmail = require("../assets/icone-email.png");
const Botoes = () => {
    return(
        <View>
            <TouchableOpacity style={styles.botaoGoogle}>
                <Text>Entrar com o Google</Text>
                <Image source={logoGoogle} style={styles.imagemGoogle}></Image>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botãoEmail}>
                <Text style={styles.texto}>Entrar com o Email</Text>
                <Image source={logoEmail} style={styles.imagemGoogle}></Image>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    botaoGoogle:{
        backgroundColor: "#E1DFDC",
        width: 300,
        height: 50,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 30,
        display: "flex",
        flexDirection: "row"
    },
    botãoEmail:{
        backgroundColor: "#B9DCEE",
        width: 300,
        height: 50,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 30,
        display: "flex",
        flexDirection: "row"
    },
    texto:{
        color:"white"
    },
    imagemGoogle:{
        width:20,
        height:20,
        marginLeft:15
    }
})

export default Botoes;