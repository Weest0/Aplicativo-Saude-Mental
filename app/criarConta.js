import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import CampoTexto from "../components/campotexto";

import { supabase } from "../supabase";
import { useState } from "react";
import { router } from "expo-router";

const criarConta = () => {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [carregamento, setCarregamento] = useState(false)

    async function signUpWithEmail() {
        setCarregamento(true)
        const{
            data: {session},
            error,
        } = await supabase.auth.signUp({
            email: email,
            password: senha
        })
        
        if(error){
            Alert.alert(error.message)
        } else {
            router.push('/homepage')
        }
        setCarregamento(false);
    }

    return(
        <View style={styles.container}>
            <CampoTexto nome={"Email"} funcao={setEmail} valor={email}/>
            <CampoTexto nome={"Senha"} funcao={setSenha} valor={senha}/>
            <StatusBar style="auto"/>
            <TouchableOpacity style={styles.botao} onPress={() => signUpWithEmail()}>
                <Text>Criar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    botao:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#B9DCEE",
        width: 100,
        height: 50,
        borderRadius: 50,
        marginTop: 10
    },
    textoconta:{
        marginTop: 5,
    }
})

export default criarConta;