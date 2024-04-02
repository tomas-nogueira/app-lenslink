import { useContext, useState } from "react";
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from "react-native";
import { UserContext } from "./Context/UserContext";

export default function Login() {
    
    const[email, setEmail] = useState("");
    const[senha, setSenha] = useState("");
    const[erro, setErro] = useState( false );

    const[login, setLogin] = useState(false)

    const{Login} = useContext(UserContext)

    function Trocar() {
        setLogin(!login)
    }

    async function realizaLogin() {
        Login(email, senha);
    }
    
    return(

        <View>
            {login ? 
            
            <View style={css.main}>
                <Image source={require("../assets/img/logo.png")} style={css.logo}/>
                <View style={css.container}>
                    <Image source={require('../assets/img/LOGIN.png')}/>
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
                    <Text style={css.helper2} onPress={Trocar}>Não é cadastrado?</Text>
                    <TouchableOpacity style={css.btn} onPress={realizaLogin}>
                        <Image source={require('../assets/img/ENTRAR.png')} style={css.cadastrar}/>
                    </TouchableOpacity>
                </View>
            </View>

            :  
            
            <View style={css.main}>
                <Image source={require("../assets/img/logo.png")} style={css.logo}/>
                    <View style={css.container}>
                        <Image source={require('../assets/img/CADASTRO.png')} style={css.login}/>
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
                        <TouchableOpacity style={css.btn} onPress={Trocar}>
                            <Image source={require('../assets/img/CADASTRAR.png')} style={css.cadastrar}/>
                        </TouchableOpacity>
                    </View>
            </View> 
            }
            
        </View>
    )
}

const css = StyleSheet.create({
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
        height: 45,
        fontSize: 16,
        textAlign: "left",
        borderBottomColor: "black",
        borderBottomWidth: 1,
        width: 160,
    },
    logo: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 45,
        marginLeft: 85
    },
    btn: {
        marginTop: 35,
        backgroundColor: '#6B498E', 
        paddingVertical: 8,
        paddingHorizontal: 30,
        borderRadius: 10, 
        height: 55
    },
    cadastrar: {
        marginTop: 8
    },
    helper: {
        marginTop: 12,
        marginRight: 220,
        display: 'flex',
        justifyContent: 'flex-start',
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
    },
    helper2: {
        marginTop: 12,
        display: 'flex',
        justifyContent: 'flex-start',
        color: "blue"
    }
})

