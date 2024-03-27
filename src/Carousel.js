import React, { useState, useEffect, useRef } from 'react';
import { View, Image, StyleSheet, Dimensions, FlatList } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');
const imageWidth = screenWidth * 0.8; 
const imageHeight = imageWidth * 0.75; 

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
    height: screenWidth * 0.75, 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  image: {
    width: '80%',
    height: '100%',
    borderRadius: 10, 
    resizeMode: 'contain', 
  },
});

export default CarouselComponent;
