import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext()

export const useTheme = () => useContext(ThemeContext)

export const ThemeProvider = ({ children }) => {
	const [darkMode, setDarkMode] = useState(true)

	const toggleDarkMode = () => {
		setDarkMode((prevDarkMode) => !prevDarkMode)
	}

	return (
		<ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
			{children}
		</ThemeContext.Provider>
	)
} 


