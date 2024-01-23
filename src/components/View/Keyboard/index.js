import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import keyboardstyle from './style'
import Button from '../../UI/Button'
import { String } from '../../../utils'

const Keyboard = ({
  input,
  setInput,
  fetchData
}) => {

  const handlePress = (value) => {
    if (value === "b") {
      setInput(input.slice(0, -1))
    } else {
      setInput(input + value)
    }
  }

  return (
    <View style={keyboardstyle.container}>
      <View style={keyboardstyle.row}>
        <Button title="1" onPress={() => handlePress("1")} />
        <Button title="2" onPress={() => handlePress("2")} />
        <Button title="3" onPress={() => handlePress("3")} />
      </View>
      <View style={keyboardstyle.row}>
        <Button title="4" onPress={() => handlePress("4")} />
        <Button title="5" onPress={() => handlePress("5")} />
        <Button title="6" onPress={() => handlePress("6")} />
      </View>
      <View style={keyboardstyle.row}>
        <Button title="7" onPress={() => handlePress("7")} />
        <Button title="8" onPress={() => handlePress("8")} />
        <Button title="9" onPress={() => handlePress("9")} />
      </View>
      <View style={keyboardstyle.row}>
        <Button title="." onPress={() => handlePress(".")} />
        <Button title="0" onPress={() => handlePress("0")} />
        <Button title="b" onPress={() => handlePress("b")} />
      </View>
      <TouchableOpacity style={keyboardstyle.convertebtn}
        onPress={() => fetchData()}
      >
        <Text style={keyboardstyle.text}>{String.Convert}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Keyboard