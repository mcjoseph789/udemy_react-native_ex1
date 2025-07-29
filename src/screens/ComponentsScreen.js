import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const yourname = 'Joseph';
    const textPart = <Text style={styles.subHeaderTextStyle}>My name is {yourname}</Text>;
    return (
    <View>
        <Text style={styles.textStyle}>Getting started with React Native!</Text>
        <Text style={styles.subHeaderTextStyle}>My name is {yourname}</Text>
        {textPart}
    </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    subHeaderTextStyle: {
        fontSize: 20
    }
});

export default ComponentsScreen;