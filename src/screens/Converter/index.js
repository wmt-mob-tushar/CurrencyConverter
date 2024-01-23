import { Text, View } from 'react-native'
import React, { useState } from 'react'
import converterstyles from './style'
import Keyboard from '../../components/View/Keyboard'
import Display from '../../components/View/Display'
import { String } from '../../utils'
import useConverter from '../../apis/useConverter'

const Converter = () => {
  
  const [input, setInput] = useState("1")
  const [from, setFrom] = useState("USD")
  const [to, setTo] = useState("INR")
  
  const { data, isLoading ,fetchData} = useConverter('convert', { from: from, to: to, amount: input })

  return (
    <View style={converterstyles.container}>
      <Text style={converterstyles.header}>{String.AppTitle}</Text>
      <Display
        input={input}
        setInput={setInput}
        displaydata={data}
        isLoading={isLoading}
        from={from}
        to={to}
        setFrom={setFrom}
        setTo={setTo}
      />
      <Keyboard
        input={input}
        setInput={setInput}
        fetchData={fetchData}
      />
    </View>
  )
}

export default Converter