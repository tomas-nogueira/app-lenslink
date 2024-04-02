import React from "react";
import { Text, View, Image, StyleSheet, FlatList } from "react-native";

export default function Networking() {
  const DATA = [
    { id: "1", nome: "Carla", especialidade: 'Casamento', image: require('../assets/img/pessoa1.png')},
    { id: "2", nome: "Fátima", especialidade: 'Casamento', image: require('../assets/img/pessoa2.png')},
    { id: "3", nome: "Gabriela", especialidade: 'Casamento', image: require('../assets/img/pessoa1.png')},
    { id: "4", nome: "João", especialidade: 'Casamento', image: require('../assets/img/pessoa2.png')},
    { id: "5", nome: "Tomás", especialidade: 'Casamento', image: require('../assets/img/pessoa1.png')},
    { id: "6", nome: "Valmir", especialidade: 'Casamento', image: require('../assets/img/pessoa2.png')},
  ];

  const renderItem = ({ item }) => (
    <View style={css.item}>
      <View style={css.redBox}>
        <Image source={item.image} style={css.imgperfil}/>
        <View>
            <Text style={css.text}>{item.nome}</Text>
            <Text style={css.esp}>{item.especialidade}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      <View style={css.header}>
        <View style={css.leftheader}>
          <Image
            source={require("../assets/img/user.png")}
            style={css.user}
          />
        </View>
        <View style={css.rightheader}>
          <Image
            source={require("../assets/img/logo.png")}
            style={css.logo}
          />
        </View>
      </View>
      <View style={css.undercontainer}>
        <Image source={require("../assets/img/conectese.png")} />
      </View>

      <FlatList
        style={css.flatlist}
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />} 
      />
    </View>
  );
}

const css = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 15,
  },
  logo: {
    marginTop: 19,
    resizeMode: "cover",
  },
  user: {
    width: 80,
    resizeMode: "contain",
  },
  undercontainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    top: 18,
  },
  item: {
    padding: 20,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  redBox: {
    width: "65%",
    height: 250,
    backgroundColor: "#6B498E",
    borderRadius: 10,
    justifyContent: 'space-evenly',
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 29,
    fontWeight: '600',
    textAlign: 'center'
  },
  flatlist: {
    flex: 1,
    marginTop: 25
  },
  esp: {
    fontSize: 20,
    color: 'white'
  }
});
