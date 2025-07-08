import { StyleSheet, Text, View,StatusBar, SafeAreaView } from 'react-native';
import { Svg } from 'react-native-svg';
import SvgViewer from '../components/SvgViewer';
import { useEffect, useState } from 'react';
import ColorPalette from '../components/ColorPalette';


const index = () => {
  const [fillColors, setFillColors] = useState<string[]>([]);
  const [currentColor, setCurrentColor] = useState<string>('red');

  useEffect(() => {
    setFillColors(Array(5).fill('white'));
  }, []);

  const onFill = (i: number) => {
    let newFillColors = fillColors.slice(0);
    newFillColors[i] = currentColor;
    setFillColors(newFillColors);
    console.log(i)
  };

  const changeColor = ( color: string) => {
    setCurrentColor(color)
  }



  return (
    <SafeAreaView style={styles.container}>
      <StatusBar  />
      <SvgViewer fillColors={fillColors} onFill={onFill} />
      <ColorPalette  currentColor={currentColor} changeColor={setCurrentColor}/>
      
    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

})