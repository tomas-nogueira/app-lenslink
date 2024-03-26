import React from 'react';
import { View, Image, StyleSheet, FlatList, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const images = [
  require('../assets/img/pessoa1.png'),
  require('../assets/img/pessoa2.png'),
];

const HorizontalFlatList = () => {
  const combinedImages = [];
  for (let i = 0; i < 6; i++) {
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
        snapToInterval={100} 
        decelerationRate="fast"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slide: {
    width: 76,
    height: 77, 
    marginHorizontal: 8, 
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
    alignItems: 'flex-start',
    marginTop: 20
  }
});

export default HorizontalFlatList;
