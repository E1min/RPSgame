import React from 'react'
import "/src/assets/App.css"
import { FaRegHandPaper, FaRegHandRock, FaRegHandScissors } from 'react-icons/fa'
import Display from './components/Display'


function App() {
  return (
    <div className='app'>
  <Display/>
    </div>
  )
}

export default App