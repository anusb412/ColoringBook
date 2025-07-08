import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DummySvg from './DummySvg'
import { Svg } from 'react-native-svg'

type SvgViewerProps = {
  onFill: (i: number) => void;
  fillColors: string[];
};

const SvgViewer = ({ onFill, fillColors }: SvgViewerProps) => {
  return (
   
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={{ flex: 1  }}
        contentContainerStyle={{ width: Dimensions.get('screen').width}}
      >
        <Svg 
        width={400} 
        height={400}
        viewBox='0 0 650 500'>
        <DummySvg fillColors={fillColors} onFill={onFill} />
      </Svg>
      </ScrollView>
  )
}

export default SvgViewer

const styles = StyleSheet.create({})