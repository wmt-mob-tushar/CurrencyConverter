import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { Colors, String } from '../../../utils'
import { Select } from 'native-base';
import inputboxstyle from './style'

const InputBox = ({
    input,
    setInput,
    from,
    setFrom,
    data,
}) => {
  return (
    <View style={inputboxstyle.inputtext}>
        <View style={inputboxstyle.inputcontainer}>
            <Text style={inputboxstyle.inputtextheader}>{String.From}</Text>
            <TextInput
                style={inputboxstyle.input}
                value={input}
                onChangeText={(text) => setInput(text)}
                placeholder='0'
                showSoftInputOnFocus={false}
                placeholderTextColor={Colors.TextColor}
            />
        </View>
        <View style={inputboxstyle.contrycontainer}>
            <Select
                color={Colors.TextColor}
                selectedValue={from}
                backgroundColor={Colors.Primary}
                placeholderTextColor={Colors.TextColor}
                width={100}
                borderRadius={70}
                borderWidth={0}
                onValueChange={(itemValue) => setFrom(itemValue)}
                fontSize={13}
            >
                {data.map((item, index) => (
                    <Select.Item label={item.symbol} key={index} value={item.symbol} />
                ))
                }
            </Select>
        </View>
    </View>
  )
}

export default InputBox