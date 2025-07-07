import { StyleSheet, Text, View, Image, Button, TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'
import Simple1 from '../components/Simple1';
import ColorPalette from 'react-native-color-palette';
import { ColorPicker } from 'react-native-color-picker';



const index = () => {

    const [showColorPicker, setShowColorPicker] = useState(false);
    const [selectedColor, setSelectedColor] = useState('rgb(207, 34, 34)'); // Initial color
     const [selectedPathId, setSelectedPathId] = useState(null);

    const handleColorSelect = (color) => {
        setSelectedColor(color);
        setShowColorPicker(false); 
    };


    return (
        <View style={styles.container}>

            <Simple1 color={selectedColor}/>


            <View style={{ bottom: 50}}>
                <Button title="Open Color Picker" onPress={() => setShowColorPicker(true)} />
                <Text style={{ marginTop: 20, color: selectedColor }}>
                    Selected Color: {selectedColor}
                </Text>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={showColorPicker}
                    onRequestClose={() => setShowColorPicker(false)}
                >
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                        <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
                            <ColorPalette
                                onChange={handleColorSelect}
                                value={selectedColor} // Set initial selected color
                                colors={['#C0392B', '#E74C3C', '#9B59B6', '#8E44AD', '#2980B9']} // Define your palette
                                title={"Select a Color"}
                            />
                            <Button title="Close" onPress={() => setShowColorPicker(false)} />
                        </View>
                    </View>
                </Modal>
            </View>
        </View>
    )
}

export default index

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    colorContainer: {
        backgroundColor: 'tan',
        width: 50,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 50,
        flexDirection: 'row',
        gap: 20,
    },
    btnContainer: {
        backgroundColor: 'white',
        width: 80,
        height: 40,
        bottom: 50
    },
    colorPicker: {
        flexDirection: 'row',
        bottom: 50,
        backgroundColor: 'white'
    },
    colorBubble: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginHorizontal: 5,
        borderWidth: 1,
        borderColor: 'black',
    },
})