import { useState, useEffect } from 'react'
import './App.css'
import Home from './components/Home'
import { NextUIProvider } from "@nextui-org/react";
import DarkModeToggle from './components/darkModeToggle';
import Header from './components/Header';


function App() {
	const [darkMode, setDarkMode] = useState(true)

	const toggleDarkMode = () =>{
		setDarkMode((prevDarkMode) => !prevDarkMode)
	}


  return (
	<NextUIProvider>
		<main className={`${darkMode ? 'dark' : ''} text-foreground bg-background`}>
				  <div className='switch-btn'>
						<DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
				 </div>
				<Header/>
				<Home/>
		</main>
	</NextUIProvider>
  )
}

export default App
