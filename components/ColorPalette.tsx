import { View, StyleSheet, TouchableOpacity } from 'react-native';

interface ColorPaletteProps {
  currentColor: string;
  changeColor: (color: string) => void;
}

const ColorPalette = ({ currentColor, changeColor }: ColorPaletteProps) => {
  const colors = [
    'red',
    'orange',
    'yellow',
    'lightgreen',
    'darkgreen',
    'lightblue',
    'darkblue',
    'purple',
    'pink',
    'darkturquoise',
    'teal',
    'hotpink',
    'blue',
    'green',
    'white',
    'black'
  ];

  return (
    <View style={styles.container}>
      {colors.map((color) => {
        const active = currentColor === color; //clearer 'active'

        return (
          <TouchableOpacity
            key={color}
            onPress={() => {
              changeColor(color);
            }}
          >
            <View
              style={[
                styles.item,
                { backgroundColor: color },
                active ? styles.active: null // Apply styles when true
              ]}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default ColorPalette;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', 
    flexWrap: 'wrap', 
    justifyContent: 'center', 
    padding: 10, 
  },
  item: {
    width: 40, 
    height: 40, 
    borderRadius: 20, 
    margin: 5, 
    borderWidth: 1,
    borderColor: 'gray'
  },
  active: {
    borderWidth: 2, 
    borderColor: 'black', 
  },
});