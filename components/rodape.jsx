import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const iconeTwitter = require("../assets/icone-twitter.png");
const iconeInstagram = require("../assets/icone-instagram.png");
const iconeFacebook = require("../assets/icone-facebook.png");
const Rodape = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.texto}>Conheça nossas redes</Text>
            <View style={styles.box}>
                <TouchableOpacity>
                    <Image source={iconeTwitter}></Image>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={iconeInstagram}></Image>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={iconeFacebook}></Image>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    box:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        gap: 20,
    },
    texto:{
        marginTop:30,
        marginBottom: 5
    }
});

export default Rodape;