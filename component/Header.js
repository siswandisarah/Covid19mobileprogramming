import React from 'react';
import { View, Text } from 'react-native';

const Header = (props) => {
    const {textStyle, viewStyle} = styles;
    return (
        <View style={viewStyle}>
            <Text style = {textStyle}> Covid-19 Global dan indonesia</Text>
        </View>
    );
};


const styles = {
    viewStyle: {
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        shadowColor: '#001 ',
        shadowOffset: { width: 1, height: 3},
        shadowOpacity: 0.2,
        elevation: 5,
        position: 'relative'
    },
    textStyle: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'Italic'
    }
}
export default Header;