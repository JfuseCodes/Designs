import { useState, useEffect, useCallback} from 'react'
import './App.css'
import Signup from './Signup'
import { Box, Container } from '@chakra-ui/react'

function App() {
 
  return(
    <Box w={{sm:'100%'}} margin={{lg:'5% auto'}} width={{lg:'80%'}} minWidth={{lg:'992px'}} padding={{lg:'10px'}} h={{lg: '800px'}}>
      <Signup/>
    </Box>
  )
}
export default App