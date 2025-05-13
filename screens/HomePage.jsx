import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
/* import PagerView from 'react-native-pager-view'; */
import BotoesAtalho from "../components/BotoesAtalho";
import BotoesPequenos from "../components/BotoesPequenos";

const HomePage = () => {
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.cabecalho}>
                <BotoesPequenos imagem={require('../assets/ImagesHomePage/icone-usuario.png')}/>
                <BotoesPequenos imagem={require('../assets/ImagesHomePage/icone-notificação.png')}/>
            </View>
            <Text style={styles.titulo}>Bem Vindo(a),</Text>
            <Text style={[styles.titulo, styles.cor]}>Usuario!</Text>
            <Text style={styles.atalhos}>Atalhos rápidos</Text>
            <View style={styles.caixadeatalhos}>
                <BotoesAtalho imagem={require('../assets/ImagesHomePage/Chat.png')} titulo="Chat"/>
                <BotoesAtalho imagem={require('../assets/ImagesHomePage/Atividades.png')} titulo="Atividades"/>
                <BotoesAtalho imagem={require('../assets/ImagesHomePage/Respiracao.png')} titulo="Respiração"/>
                <BotoesAtalho imagem={require('../assets/ImagesHomePage/Humor.png')} titulo="Humor"/>
            </View>
            {/* <View style={styles.caixadecarrossel}>
                <PagerView initialPage={0}>
                    <View key="1"><Text>Experimente uma sessão de respiração guiada!</Text></View>
                    <View key="2"><Text>Experimente uma sessão de respiração guiada!</Text></View>
                    <View key="3"><Text>Experimente uma sessão de respiração guiada!</Text></View>
                </PagerView>
            </View> */}
            <View style={styles.caixadecarrossel}>
                <Text style={styles.textocarrossel}>Experimente uma sessão de respiração guiada!</Text>
            </View>
            <View style={styles.caixadepesquisa}>
                <Text style={styles.titulopesquisa}>Como se sente hoje?</Text>
                <Text style={styles.subtitulopesquisa}>Nos ajute a te ajudar!{"\n"}Responda nosso questionário.</Text>
                <TouchableOpacity>
                    <Text style={styles.botaopesquisa}>Iniciar Agora</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.caixaparavoce}>
                <TouchableOpacity style={styles.paravoce}>
                    <Image source={require("../assets/ImagesHomePage/Coracao.png")}></Image>
                    <Text>Para Você</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.paravoce}>
                    <Image source={require("../assets/ImagesHomePage/Biblioteca.png")}></Image>
                    <Text>Biblioteca</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.mensagemdiaria}>
                <Text style={styles.textomenssagemdiaria}>
                    "A felicidade pode ser encotrada mesmo nas{"\n"}
                    horas mais sombrias, se você se lembrar de{"\n"} 
                    acender a luz"
                </Text>
                <Text style={styles.citacaomensagemdiaria}>— Alvo Dumbledore (J.K. Rowling) </Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    cabecalho:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center", 
        padding: 30,
        width: "100%",
        justifyContent: "space-between",
    }, 
    container:{
        flex: 1
    },
    titulo:{
        fontSize: 26,
        marginLeft: 30
    },
    atalhos:{
        fontSize: 12,
        marginLeft: 30,
        marginTop: 30
    },
    caixadeatalhos:{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20,
    },
    caixadecarrossel:{
        width: 300,
        height: 64,
        backgroundColor: "#E1DFDC",
        marginTop: 20,
        marginLeft: 30,
        display: "flex",
        justifyContent: "center",  
        alignItems: "center",
        borderRadius: 20
    },
    textocarrossel:{
        fontSize: 10
    },
    caixadepesquisa:{
        width: 300,
        height: 125,
        backgroundColor: "#A8DADC",
        padding: 30,
        marginLeft: 30,
        display: "flex",
        justifyContent: "center",
        marginTop: 25,
        borderRadius: 20
    },
    titulopesquisa:{
        color: "#0DADB4",
        fontSize: 15,
        fontWeight: "bold"
    },
    subtitulopesquisa:{
        marginBottom: 10,
        marginTop: 10,
        fontSize: 12,
        fontWeight: "regular"
    },
    botaopesquisa:{
        color: "#0DADB4",
        fontSize: 12,
        fontWeight: "bold"
    },
    paravoce:{
        fontSize: 14,
        display: "flex",
        flexDirection: "row",
        color: "#573926",
        backgroundColor: "#E1DFDC",
        fontWeight: "bold",
        width: "48%",
        height: 60,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
    caixaparavoce:{
        display: "flex",
        flexDirection: "row",
        marginLeft: 30,
        width: 300,
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 25,
    },
    mensagemdiaria:{
        padding: 10,
        backgroundColor: "#E1DFDC",
        width: 300,
        height: 100,
        marginTop: 25,
        marginLeft: 30,
        borderRadius: 10
    },
    textomenssagemdiaria:{
        color: "#707070",
        fontSize: 13,
        fontWeight: "regular"
    },
    citacaomensagemdiaria:{
        fontSize: 10,
        color: "#707070",
        fontWeight: "medium",
        marginTop: 8
    },
    cor:{
        color: "#A8DADC",
    }
        
})
export default HomePage;