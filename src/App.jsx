import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react'
import './App.css'
import Home from './components/Home'
import { NextUIProvider } from "@nextui-org/react";
import DarkModeToggle from './components/darkModeToggle';
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import ModalWindow from './components/ModalWindow';


function App() {
	const [darkMode, setDarkMode] = useState(true)

	const toggleDarkMode = () =>{
		setDarkMode((prevDarkMode) => !prevDarkMode)
	}


  return (
	<BrowserRouter>
		<NextUIProvider>
			<Header darkMode={darkMode} />
			<main className={`${darkMode ? 'dark' : ''} text-foreground bg-background`}>
					<div className='switch-btn'>
							<DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
					</div>
					<Routes>
						<Route path='/' element={<Home darkMode={darkMode}/>}/>
						<Route path='/register' element={<Register/>} />
						<Route path='/login' element={<Login/>} />
					</Routes>
			</main>	
		</NextUIProvider>
	</BrowserRouter>
  )
}

export default App
