import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react'
import './App.css'
import Home from './components/Home'
import { NextUIProvider } from "@nextui-org/react";
import DarkModeToggle from './components/darkModeToggle';
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import { ThemeProvider, useTheme } from './components/ThemeContext';
import PrivateRoute from './components/PrivateRoute';

function AppContent() {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <>
      <Header darkMode={darkMode} />
      <main className={`${darkMode ? 'dark' : ''} text-foreground bg-background`}>
        <div className='switch-btn'>
          <DarkModeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </div>
        <Routes>
          {/* <Route path='/' element={<Home />} /> */}
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
			 <Route
			 	path="/user"
				element={
					<PrivateRoute>
						<Home/>
					</PrivateRoute>
				}
			 />
        </Routes>
      </main>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <NextUIProvider>
        <ThemeProvider>
          <AppContent />
        </ThemeProvider>
      </NextUIProvider>
    </BrowserRouter>
  );
}


export default App
