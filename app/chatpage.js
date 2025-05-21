import { Image, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { router } from "expo-router"
import Mensagem from "../components/mensagem";
import { useEffect, useState } from "react";
import { GoogleGenAI } from "@google/genai";
import MensagemIA from "../components/mensagemIA";
import AnimacaoCarregamento from "../components/animacaoCarregamento";

const ChatPage = () => {
    const systemInstruction = `
        Você é um assistente de inteligência artificial dentro de um aplicativo de saúde mental.
        Seu papel é oferecer apoio emocional para pessoas que estão passando por dificuldades psicológicas ou emocionais. 
        Sempre inicie perguntando como a pessoa está se sentindo.
        Seja empático, compreensivo e gentil em todas as respostas.
        Nunca forneça conselhos médicos, diagnósticos ou tratamentos. Sempre incentive o usuário a procurar ajuda profissional com psicólogos ou psiquiatras.
        Sempre responda em português, de forma clara, concisa e positiva.
        Incentive a prática de atividades que possam melhorar o bem-estar emocional, como meditação, exercícios físicos, hobbies criativos e descanso.
        Seu objetivo é ser um apoio acolhedor, seguro e encorajador.
        Nunca saia do seu papel de assistente de saúde mental, se o usuário instistir, diga que seu modelo não pode responder questoes fora do tema.
    `;

    const [respostasIA, setRespostasIA] = useState([]);
    const [mensagem, setMensagem] = useState("");
    const [mensagens, setMensagens] = useState([]);
    const [iaDigitando, setIADigitando] = useState(false);

    const ai = new GoogleGenAI({ apiKey: "AIzaSyDUchP7c374NREfhxnuB58D3Yn90vbNglc" });

    const enviarMensagem = async () => {
        if(mensagem.trim() === "") return;

        setMensagens((prev) => [...prev, mensagem]);
        setIADigitando(true);
        const response = await ai.models.generateContent({
            model: "gemini-2.0-flash",
            contents: mensagem,
            config: {
                systemInstruction: systemInstruction
            },
        });
        setRespostasIA((prev) => [...prev, response.text]);
        setIADigitando(false);
        setMensagem("");
    }

    return (
        <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'} keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0} >
            <ScrollView style={{flex: 0.9}}>
                <View>
                    <ScrollView>
                        {mensagens.map((msg, index) => (
                            <Mensagem key={index} texto={msg}/>
                        ))}
                    </ScrollView>
                </View>
                {iaDigitando && <AnimacaoCarregamento/>}
                <View>
                    <ScrollView>
                        {respostasIA.map((resp, index) => (
                            <MensagemIA key={index} texto={resp}/>
                        ))}
                    </ScrollView>
                </View>
            </ScrollView>
            <View style={styles.caixamensagem}>
                <View style={styles.campotexto}>
                    <TouchableOpacity>
                        <Image source={require("../assets/emoji.png")}></Image>
                    </TouchableOpacity>
                    <TextInput placeholder="Mensagem" style={styles.texto} onChangeText={setMensagem} value={mensagem}/>
                </View>
                <TouchableOpacity style={styles.botaoenviar} onPress={enviarMensagem}>
                        <Image source={require("../assets/enviar.png")}></Image>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 30,
        height: "90%",
    },
    campotexto:{
        width: "85%",
        height: 40,
        borderRadius: 20,
        backgroundColor: "#E1DFDC",
        paddingLeft: 15,
        flexDirection: "row",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",        
    },
    texto:{
        color: "#707070",
        marginLeft: 5,
    },
    caixamensagem:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingBottom: "20%"
    },
    botaoenviar:{
        width: 40,
        height: 40,
        backgroundColor: "#E1DFDC",
        borderRadius: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
})

export default ChatPage