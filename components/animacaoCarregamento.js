import { Image, StyleSheet, View } from "react-native"

const AnimacaoCarregamento = () => {
    return(
        <View>
            <Image source={require("../assets/carregando.gif")} style={styles.carregar}/>
        </View>
    )
}
const styles = StyleSheet.create({
    carregar:{
        width: 35,
        height: 35,
        marginTop: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 50,
        marginLeft: 35,
        marginBottom: 10,
    }
})


export default AnimacaoCarregamento;