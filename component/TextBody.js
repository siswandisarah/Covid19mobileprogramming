import React from 'react';
import { View, Text, Image} from 'react-native';

const TextBody = (props) => {
    const {textStyle, viewStyle} = styles;
    return (
        <View style={viewStyle}>
            
            <Text style = {textStyle}>           INDONESIA              </Text>
        
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
        shadowOffset: { width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
textStyle: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold'
}
}
export default TextBody;