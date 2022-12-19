import React from 'react'
import { ENV } from './environment/environment'

const App = () => {
	
	const variablePrueba = ENV.API_KEY


  return (
	<>
		<h1>helloooo</h1>
		<h1>{variablePrueba}</h1>
	</>
    
  )
}

export default App
