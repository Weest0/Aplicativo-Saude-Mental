import { Image, TouchableOpacity, View, StyleSheet, Text } from "react-native";

const BotoesAtalho = ({imagem, titulo, acao}) => {
    return <View style={styles.caixa}>
            <TouchableOpacity style={styles.container} onPress={acao}>
                <View>
                    <Image source={imagem}></Image>
                </View>
            </TouchableOpacity>
            <Text style={styles.texto}>{titulo}</Text>
    </View>
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#A8DADC',
        width: 54,
        height: 52,
        borderRadius: 15,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",  

    }, 
    texto:{
        color: "black",
        fontSize: 15,
        marginTop: 10,
    },
    caixa:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
    }
})

export default BotoesAtalho;