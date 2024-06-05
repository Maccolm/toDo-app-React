import { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types'

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
ThemeProvider.propTypes = {
	children: PropTypes.node.isRequired
}