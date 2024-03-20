import { Image, StyleSheet, Text, View, Dimensions } from "react-native";
import Swiper from 'react-native-swiper';

const { width } = Dimensions.get('window');

const image1 = require('../assets/img/image1.png');
const image2 = require('../assets/img/image2.png');
const image3 = require('../assets/img/image3.png');

const images = [image1, image2, image3];


export default function Home() {
    return(
            <View style={css.container}>
                <View style={css.header}>
                    <View style={css.leftheader}>
                        <Image source={require("../assets/img/user.png")}/>
                        <Text style={css.ola}>Olá, <Text style={css.carla}>Carla</Text></Text>
                    </View>
                    <View style={css.rightheader}>
                    <Image source={require("../assets/img/logo.png")} style={css.logo}/>
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
    carla: {
        color: "#6B498E",
        fontWeight: "800",
        fontSize: 20,
    },
    ola: {
        fontSize: 20
    },
    logo: {
        marginTop: 18
    },
    container: {
        flex: 1,
      },
      wrapper: {},
      slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: width,
        resizeMode: 'cover',
      },
})