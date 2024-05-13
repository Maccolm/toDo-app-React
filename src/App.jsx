
import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import { NextUIProvider } from "@nextui-org/react";
import DarkModeToggle from './components/darkModeToggle';


function App() {
	const [darkMode, setDarkMode] = useState(true)

	const toggleDarkMode = () =>{
		setDarkMode((prevDarkMode) => !prevDarkMode)
	}

  return (
	<NextUIProvider>
		<main className={`${darkMode ? 'dark' : ''} text-foreground bg-background`}>
			<div className="container">
				  <div className='switch-btn'>
						<DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
			   </div>
				<Home/>
			</div>
		</main>
	</NextUIProvider>
  )
}

export default App
