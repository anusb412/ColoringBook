import { StyleSheet, Text, View, Image, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import Simple1 from '../components/Simple1';
import Pallete from '../components/colorPalette'


const index = () => {
    return (
        <View style={styles.container}>

            <Simple1 />
            <View style={styles.colorContainer}>
                <TouchableOpacity style={styles.btnContainer}>
                    <Button title='Red' />
                </TouchableOpacity>
                <Button title='Blue' />
                <Button title='Green' />
            </View>
        </View>
    )
}

export default index

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    colorContainer: {
        backgroundColor: 'tan',
        width: 200, height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 50,
        flexDirection: 'row',
    }
})