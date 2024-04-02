import React, { useState } from "react";
import { Text, View, Image, StyleSheet, FlatList, TouchableOpacity, Button } from "react-native";
import NetInfo from '@react-native-community/netinfo';

export default function Networking() {
  const DATA = [
    { id: "1", nome: "Carla", especialidade: 'Casamento', tel: '(14) 9919-9809', area: 'Bauru', image: require('../assets/img/perfilm.png')},
    { id: "2", nome: "Fátima", especialidade: 'Batizado', tel: '(11) 9229-9809', area: 'Jaú', image: require('../assets/img/pessoa2.png')},
    { id: "3", nome: "Gabriela", especialidade: 'Gestante', tel: '(13) 9999-9809', area: 'Paraná', image: require('../assets/img/pessoa1.png')},
    { id: "4", nome: "João", especialidade: 'Gestante', tel: '(11) 9909-9809', area: 'Curitiba', image: require('../assets/img/pessoa2.png')},
    { id: "5", nome: "Tomás", especialidade: 'Casamento', tel: '(13) 9459-9809', area: 'Ourinhos', image: require('../assets/img/pessoa1.png')},
    { id: "6", nome: "Valmir", especialidade: 'Batizado', tel: '(11) 8719-9809', area: 'Bauru', image: require('../assets/img/pessoa2.png')},
  ];

  const [selectedItem, setSelectedItem] = useState(null);

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => setSelectedItem(item)}>
      <View style={css.item}>
        <View style={css.redBox}>
          <Image source={item.image} style={css.imgperfil}/>
          <View>
              <Text style={css.text}>{item.nome}</Text>
              <Text style={css.esp}>{item.especialidade}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderSelectedItem = () => {
    if (!selectedItem) return null;

    return (
      <View style={css.selectedItemContainer}>
        <Image source={selectedItem.image} style={css.selectedImage} />
        <Text style={css.selectedText}>{selectedItem.nome}</Text>
        <Text style={css.selectedText}>Ramo: {selectedItem.especialidade}</Text>
        <Text style={css.selectedText}>{selectedItem.tel}</Text>
        <Text style={css.selectedText}>{selectedItem.area}</Text>
        <Button title="Voltar" onPress={() => setSelectedItem(null)} />
      </View>
    );
  };

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

      {renderSelectedItem()}
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
  },
  imgperfil: {
    width: 120,
    height: 110,
    resizeMode: 'contain',
  },
  selectedItemContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 10
  },
  selectedText: {
    fontSize: 30,
    color: 'white',
    marginBottom: 10,
  },
});
