import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({setlogado}) {
    
    const[email, setEmail] = useState("");
    const[senha, setSenha] = useState("");
    const[erro, setErro] = useState( false );

    const[login, setLogin] = useState(false)

    function Trocar() {
        setLogin(!login)
    }

    async function realizaLogin() {
        if(email == 'tomas@mail.com' && senha == '123') {
            await AsyncStorage.setItem('usuario', email);
            setlogado(true);
        } else {
            setErro(true);
        }

    }
    
    return(

        <View>
            {login ? 
            
            <View style={css.main}>
                <Image source={require("../assets/img/logo.png")} style={css.logo}/>
                <View style={css.container}>
                    <Text style={css.login}>LOGIN</Text>
                    <View style={css.boxinput}>
                        <TextInput 
                        style={css.input} 
                        placeholder='Insira o e-mail'
                        keyboardType='default'
                        value={email}
                        TextInput={email}
                        onChangeText={(digitado) => setEmail(digitado)}
                        />
                        <TextInput style={css.input} 
                        placeholder='Insira a senha'
                        keyboardType='default'
                        value={senha}
                        TextInput={senha}
                        onChangeText={(digitado) => setSenha(digitado)}
                        />
                    </View>
                    <Text style={css.helper} onPress={Trocar}>Não é cadastrado?</Text>
                    <TouchableOpacity style={css.btn} onPress={realizaLogin}>
                        <Text style={css.btnText}>ENTRAR</Text>
                    </TouchableOpacity>
                </View>
            </View>

            :  
            
            <View style={css.main}>
                <Image source={require("../assets/img/logo.png")} style={css.logo}/>
                    <View style={css.container}>
                        <Text style={css.login}>CADASTRAR</Text>
                        <View style={css.boxinput}>
                            <View style={css.highinput}>
                                <TextInput 
                                style={css.input} 
                                placeholder='Nome Completo'
                                keyboardType='default'
                                />
                                <TextInput style={css.input} 
                                placeholder='CPF/CNPJ'
                                keyboardType='numeric'
                                />
                            </View>
                            <View style={css.downinput}>
                                <TextInput style={css.input} 
                                placeholder='E-mail'
                                keyboardType='default'
                                />
                                <TextInput style={css.input} 
                                placeholder='Senha'
                                keyboardType='default'
                                />
                            </View>
                        </View>
                        <Text style={css.helper} onPress={Trocar}>Já tem uma conta?</Text>
                        <TouchableOpacity style={css.btn}>
                            <Text style={css.btnText}>CADASTRAR</Text>
                        </TouchableOpacity>
                    </View>
            </View> 
            }
            
        </View>
    )
}

const css = StyleSheet.create({
    login: {
        fontSize: 40,
        fontWeight: "600",
        color: "#52056C"
    },
    boxinput: {
        marginTop: 5
    },
    container: {
        marginTop: 100,
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
    },
    input: {
        marginTop: 30,
        color: 'black', // Cor do texto
        height: 20,
        fontSize: 16,
        textAlign: "center",
        borderBottomColor: "black",
        borderBottomWidth: 1,
        width: 160,
        fontWeight: "bold"
    },
    logo: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        marginLeft: 85
    },
    btn: {
        marginTop: 35,
        backgroundColor: '#6B498E', 
        paddingVertical: 8,
        paddingHorizontal: 30,
        borderRadius: 10, 
    },
    btnText: {
        color: '#FFFFFF', 
        textAlign: 'center', 
        fontWeight: 'bold', 
        fontSize: 30
    },
    helper: {
        marginTop: 12,
        color: "blue"
    },
    highinput: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        gap: 10
    },
    downinput: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        gap: 10
    }
})