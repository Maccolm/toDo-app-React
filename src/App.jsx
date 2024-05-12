
import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import { NextUIProvider } from "@nextui-org/react";


function App() {
  const [count, setCount] = useState(0)

  return (
	<NextUIProvider>
		<div className="container">
			<Home/>
		</div>
	</NextUIProvider>
  )
}

export default App
