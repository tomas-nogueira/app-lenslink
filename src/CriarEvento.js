import React, { useState, useEffect } from "react";
import { Text, TextInput, View, StyleSheet, TouchableOpacity, Image, Alert, ScrollView } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Criar() {
    const [evento, setEvento] = useState(true);
    const [eventosList, setEventosList] = useState([]);
    const [NomeCliente, setNomeCliente] = useState('');
    const [TipoEvento, setTipoEvento] = useState('');
    const [dataEvento, setDataEvento] = useState('');

    useEffect(() => {
        // Recupera os eventos salvos no AsyncStorage
        const fetchEventos = async () => {
            try {
                const eventosSalvos = await AsyncStorage.getItem('eventosList');
                if (eventosSalvos !== null) {
                    setEventosList(JSON.parse(eventosSalvos));
                }
            } catch (error) {
                console.error('Erro ao recuperar os eventos:', error);
            }
        };
        fetchEventos();
    }, []);

    useEffect(() => {
        // Salva os eventos no AsyncStorage sempre que a lista de eventos for atualizada
        const saveEventos = async () => {
            try {
                await AsyncStorage.setItem('eventosList', JSON.stringify(eventosList));
            } catch (error) {
                console.error('Erro ao salvar os eventos:', error);
            }
        };
        saveEventos();
    }, [eventosList]);

    function TrocaEvento() {
        setEvento(!evento);
    }

    function handleCriarEvento() {

        if(NomeCliente && TipoEvento && dataEvento != '') {

            const novoEvento = {
                NomeCliente: NomeCliente,
                TipoEvento: TipoEvento,
                dataEvento: dataEvento
            };

            setEventosList([...eventosList, novoEvento]);

            setNomeCliente('');
            setTipoEvento('');
            setDataEvento('');
        }
    }

    function handleExcluirEvento(index) {
        Alert.alert(
            'Confirmar exclusão',
            'Tem certeza que deseja excluir este evento?',
            [
                {
                    text: 'Cancelar',
                    style: 'cancel'
                },
                {
                    text: 'Excluir',
                    onPress: () => {
                        const novosEventos = [...eventosList];
                        novosEventos.splice(index, 1);
                        setEventosList(novosEventos);
                    }
                }
            ]
        );
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={css.header}>
                <View style={css.leftheader}>
                    <Image source={require("../assets/img/user.png")} style={css.user} />
                </View>
                <View style={css.rightheader}>
                    <Image source={require("../assets/img/logo.png")} style={css.logo} />
                </View>
            </View>
            {evento ?
                <ScrollView>
                    <View>
                        <View style={css.eventobox}>
                            <Image source={require('../assets/img/EVENTOS.png')} style={css.eventos} />
                            <TouchableOpacity onPress={TrocaEvento} style={css.criarevento}>
                                <Image source={require('../assets/img/CRIAR.png')} style={css.imgtext} />
                            </TouchableOpacity>
                        </View>
                        {eventosList.length > 0 && (
                            <View style={css.eventosContainer}>
                                {eventosList.map((evento, index) => (
                                        <View style={css.eventoItem}>
                                            <Text style={css.leftbox}><Text style={css.rightbox}>{evento.TipoEvento} {evento.NomeCliente}</Text></Text>
                                            <Text style={css.leftbox}>Data: {evento.dataEvento}</Text>
                                            <TouchableOpacity key={index} onPress={() => handleExcluirEvento(index)}>
                                                <Image source={require('../assets/img/Remove.png')} style={css.trash}/>
                                            </TouchableOpacity>
                                        </View>
                                ))}
                            </View>
                        )}
                    </View>
                </ScrollView>
                :
                <View style={css.container}>
                    <Image source={require('../assets/img/evento.png')} />
                    <View>
                        <TextInput
                            style={css.input}
                            placeholder="Nome do cliente"
                            keyboardType='default'
                            value={NomeCliente}
                            onChangeText={text => setNomeCliente(text)}
                        />
                        <TextInput
                            style={css.input}
                            placeholder="Tipo do evento"
                            value={TipoEvento}
                            onChangeText={text => setTipoEvento(text)}
                        />
                        <TextInput
                            style={css.input}
                            placeholder="Data"
                            keyboardType='numeric'
                            placeholderTextColor="#484343"
                            value={dataEvento}
                            onChangeText={text => setDataEvento(text)}
                        />
                    </View>
                    <TouchableOpacity style={css.btn} onPress={handleCriarEvento}>
                        <Image source={require('../assets/img/CRIAR.png')} style={css.imgtext} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={TrocaEvento} style={css.meuseventos}>
                        <Image source={require('../assets/img/MEUSEVENTOS.png')}/>
                    </TouchableOpacity>
                </View>
            }
        </View>
    )
}

const css = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
        gap: 20
    },
    evento: {
        fontSize: 32,
        fontWeight: "600",
        color: "#52056C"
    },
    input: {
        color: 'black',
        height: 70,
        fontSize: 16,
        textAlign: "left",
        borderBottomColor: "black",
        borderBottomWidth: 1,
        width: 300,
    },
    btn: {
        marginTop: 35,
        backgroundColor: '#6B498E',
        paddingVertical: 8
    },
    imgtext: {
        marginTop: 8,
        
    },
    header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 15
    },
    logo: {
        marginTop: 19,
        resizeMode: 'cover'
    },
    user: {
        width: 80,
        resizeMode: 'contain'
    },
    eventos: {},
    eventobox: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15
    },
    eventosContainer: {
        marginTop: 20,
        paddingHorizontal: 20,
    },
    btn: {
        marginTop: 35,
        backgroundColor: '#6B498E', 
        paddingVertical: 8,
        paddingHorizontal: 30,
        borderRadius: 10, 
    },
    imgtext: {
        marginTop: 8
    },
    criarevento: {
        marginTop: 10,
        backgroundColor: '#6B498E',
        padding: 5,
        borderRadius: 5
    },
    eventoItem: {
        marginBottom: 15,
        padding: 10,
        backgroundColor: '#6B498E',
        borderRadius: 5
    },
    leftbox: {
        fontSize: 25,
        color: '#3C0350',
        fontWeight: '700'
    },
    rightbox: {
        color: 'white',
    },
    trash: {
        marginLeft: 283,
        width: 45,
        resizeMode: 'contain'
    },
    meuseventos: {
        backgroundColor: '#6B498E',
        padding: 15,
        borderRadius: 5
    }
})