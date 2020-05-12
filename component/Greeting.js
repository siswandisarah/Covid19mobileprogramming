import React from 'react';
import { View, Text, Image} from 'react-native';

const Greeting = (props) => {
    const {textStyle, viewStyle} = styles;
    return (
        <View style={viewStyle}>
            
            <Text style = {textStyle}>             GLOBAL             </Text>
        
        </View>
    );
};


const styles = {
    viewStyle: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        height: 20,
        shadowColor: '#000',
        shadowOffset: { width: 10, height: 10},
        shadowOpacity: 0.5,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold'
    }
}
export default Greeting;