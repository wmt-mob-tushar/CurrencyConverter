import { Text, TouchableOpacity } from 'react-native'
import React from 'react'
import buttonstyle from './style'
import { Colors } from '../../../utils'
import Icon from 'react-native-vector-icons/Feather'

const Button = ({ title, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={buttonstyle.button}>
            {title === "b"
                ?
                <Icon name="delete" color={Colors.TextColor} size={25}/>
                :
                <Text style={buttonstyle.text}>{title}</Text>
            }
        </TouchableOpacity>
    )
}

export default Button