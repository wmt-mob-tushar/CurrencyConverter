import { View, Text, TextInput, Image } from 'react-native'
import React from 'react'
import { Colors, String } from '../../../utils'
import { Select } from 'native-base';
import inputboxstyle from './style'
import currency_flag from '../../../utils/currency_flag';

const InputBox = ({
    input,
    setInput,
    from,
    setFrom,
    data,
}) => {

    const ContryIcon = (symbol) => {
        const countryflag = currency_flag.find((item) => item.code === symbol);

        return (
            <Image
                source={countryflag?.flag ? { uri: countryflag?.flag } : require('../../../assets/Images/Dummy_flag.png')}
                style={inputboxstyle.flag}
            />
        )
    }

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
                <View style={inputboxstyle.dropdown}>
                    {ContryIcon(from)}
                    <Select
                        color={Colors.TextColor}
                        selectedValue={from}
                        placeholderTextColor={Colors.TextColor}
                        width={90}
                        borderWidth={0}
                        onValueChange={(itemValue) => setFrom(itemValue)}
                        fontSize={13}
                    >
                        {data.map((item, index) => (
                            <Select.Item
                                label={item.symbol}
                                key={index}
                                value={item.symbol}
                                leftIcon={
                                    ContryIcon(item.symbol)
                                }
                            />
                        ))
                        }
                    </Select>

                </View>
            </View>
        </View>
    )
}

export default InputBox