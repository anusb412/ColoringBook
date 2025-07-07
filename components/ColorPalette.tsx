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
    'green',
    'blue',
    'purple',
    'pink',
    'darkturquoise',
    'teal',
    'hotpink',
  ];

  return (
    <View style={styles.container}>
      {colors.map((color) => {
        const active = currentColor === color; // Use a clearer name like 'active'

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
                active && styles.active, // Apply active styles only when true
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
    flexDirection: 'row', // Arrange color items horizontally
    flexWrap: 'wrap', // Allow items to wrap to the next line
    justifyContent: 'center', // Center the items horizontally
    padding: 10, // Add some padding around the container
  },
  item: {
    width: 40, // Adjust size as needed
    height: 40, // Adjust size as needed
    borderRadius: 20, // Make it circular
    margin: 5, // Add spacing between color items
  },
  active: {
    borderWidth: 2, // Highlight the active color with a border
    borderColor: 'black', // Or any other color you prefer
  },
});