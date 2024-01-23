import React from 'react'
import Converter from './src/screens/Converter'
import { NativeBaseProvider } from 'native-base';


const App = () => {
  return (
    <NativeBaseProvider>
      <Converter/>
    </NativeBaseProvider>
  )
}

export default App