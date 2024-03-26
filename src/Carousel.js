import React, { useState, useEffect, useRef } from 'react';
import { View, Image, StyleSheet, Dimensions, FlatList } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');
const imageWidth = screenWidth * 0.8; // 80% da largura da tela
const imageHeight = imageWidth * 0.75; // Proporção 4:3

const image1 = require('../assets/img/image1.png');
const image2 = require('../assets/img/image2.png');
const image3 = require('../assets/img/image3.png');

const images = [image1, image2, image3];

const CarouselComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      const nextIndex = (currentIndex + 1) % images.length;
      flatListRef.current?.scrollToIndex({
        animated: true,
        index: nextIndex,
      });
      setCurrentIndex(nextIndex);
    }, 3000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const renderCarouselItem = ({ item }) => (
    <View style={styles.slide}>
      <Image source={item} style={styles.image} />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={images}
        renderItem={renderCarouselItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        initialScrollIndex={0}
        getItemLayout={(data, index) => ({
          length: screenWidth,
          offset: screenWidth * index,
          index,
        })}
        initialNumToRender={1}
        removeClippedSubviews={true}
        decelerationRate="fast"
        snapToInterval={screenWidth}
        snapToAlignment="start"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slide: {
    width: screenWidth,
    height: screenWidth * 0.75, // Proporção 4:3
    justifyContent: 'center', // Centraliza verticalmente
    alignItems: 'center', // Centraliza horizontalmente
  },
  image: {
    width: '80%', // 80% da largura do slide
    height: '100%', // Altura igual ao slide
    borderRadius: 10, // Arredonda as bordas
    resizeMode: 'contain', // Exibir completamente a imagem, mesmo que ela fique menor
  },
});

export default CarouselComponent;
