import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import ColorPalette from './ColorPalette';
import ColoringPageSVG from '../components/ColoringPageSVG';

const ColoringScreen = () => {
  const [selectedColor, setSelectedColor] = useState('white'); // Default color
  const [coloredShapes, setColoredShapes] = useState({}); // State to track colored shapes

  const handleSelectColor = (color) => {
    setSelectedColor(color);
  };

  const handleShapeColor = (shapeId) => {
    setColoredShapes({ ...coloredShapes, [shapeId]: selectedColor });
  };

  return (
    <View style={styles.container}>
      <ColoringPageSVG
        coloredShapes={coloredShapes}
        onPressShape={handleShapeColor}
      />
      <ColorPalette onSelectColor={handleSelectColor} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ColoringScreen;