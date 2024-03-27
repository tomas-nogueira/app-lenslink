import { Image, StyleSheet, Text, View, Dimensions, TextInput, } from "react-native";
import Carousel from './Carousel';
import PessoaScroll from './PessoaScroll'
import { useContext } from "react";
import {UserContext} from "./Context/UserContext";

export default function Home() {
    const { usuario } = useContext(UserContext);
    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;

    return (
        <View style={css.container}>
            <View style={css.header}>
                <View style={css.leftheader}>
                    <Image source={require("../assets/img/user.png")} />
                    <Text style={css.ola}>Olá, <Text style={css.carla}>{usuario}</Text></Text>
                </View>
                <View style={css.rightheader}>
                    <Image source={require("../assets/img/logo.png")} style={css.logo} />
                </View>
            </View>
            <View style={css.undercontainer}>
                <Carousel screenWidth={screenWidth} screenHeight={screenHeight} />
                <Text style={css.expandindo}>EXPANDINDO SEU <Text style={css.net}>NETWORKING</Text>!</Text>
                <PessoaScroll/>
                <View style={css.boxmood}>
                    <Image source={require("../assets/img/texto.png")} style={css.mood}/>
                </View>
            </View>
        </View>
    )
}

const css = StyleSheet.create({
    header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        marginTop: 15
    },
    container: {
        flex: 1
    },
    undercontainer: {
        flex: 1,
        display: 'flex',
    },
    carla: {
        color: "#6B498E",
        fontWeight: "800",
        fontSize: 20,
    },
    ola: {
        fontSize: 20
    },
    logo: {
        marginTop: 20,
        resizeMode: 'cover'
    },
    net: {
        backgroundColor: '#6B498E',
        color: 'white',
        fontWeight: '700',
        fontSize: 22,
    },
    expandindo: {
        fontSize: 22,
        textAlign: 'center',
        fontWeight: '500'
    },
    boxmood: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#6B498E',
        width: '80%',
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
    },
    mood: {
        width: '95%',
        resizeMode: 'contain'
    }
});
