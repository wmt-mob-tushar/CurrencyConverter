import { View,TouchableOpacity } from 'react-native'
import React from 'react'
import displaystyle from './style'
import { Colors, String } from '../../../utils'
import Icon from 'react-native-vector-icons/AntDesign'
import useConverter from '../../../apis/useConverter'
import InputBox from '../../UI/InputBox'

const Display = ({
    input,
    setInput,
    displaydata,
    isLoading,
    from,
    setFrom,
    to,
    setTo
}) => {

    const { data } = useConverter('supportedCurrencies', {})

    const SwapCurrency = () => {
        setFrom(to)
        setTo(from)
    }

    return (
        <View style={displaystyle.container}>
            <InputBox
                input={input}
                setInput={setInput}
                from={from}
                setFrom={setFrom}
                data={data}
            />

            <TouchableOpacity style={displaystyle.swap} onPress={SwapCurrency}>
                <View style={displaystyle.swapline} />
                <Icon name="swap" size={30} color={Colors.TextColor} style={displaystyle.swapicon} />
                <View style={displaystyle.swapline} />
            </TouchableOpacity>

            <InputBox
                input={isLoading ? String.Loading : displaydata.convertedAmount?.toString()}
                setInput={setInput}
                from={to}
                setFrom={setTo}
                data={data}
                isLoading={isLoading}
            />
        </View>
    )
}

export default Display