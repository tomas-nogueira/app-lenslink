import React from 'react';
import { View, Image, StyleSheet, FlatList, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const images = [
  require('../assets/img/pessoa1.png'),
  require('../assets/img/pessoa2.png'),
];

const HorizontalFlatList = () => {
  const combinedImages = [];
  for (let i = 0; i < 6; i++) { // Aumentei para 10 para garantir que haja imagens suficientes
    combinedImages.push(images[i % images.length]);
  }

  const renderCarouselItem = ({ item }) => (
    <View style={styles.slide}>
      <Image source={item} style={styles.image} />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={combinedImages}
        renderItem={renderCarouselItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContent}
        // Configuração para exibir 3 imagens por vez
        snapToInterval={100} // Largura da imagem + margem entre elas
        decelerationRate="fast"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flex: 1,
  },
  slide: {
    width: 76, // Largura definida como 76 pixels
    height: 77, // Altura definida como 77 pixels
    marginHorizontal: 5, // Espaço entre as imagens
    marginBottom: 10, // Espaço na parte inferior das imagens
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  flatListContent: {
    alignItems: 'flex-start', // Alinha os itens horizontalmente no topo
    paddingHorizontal: (screenWidth - 76 * 3 - 5 * 2) / 2, // Centraliza horizontalmente
  },
});

export default HorizontalFlatList;
