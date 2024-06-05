import { Switch } from "@nextui-org/react"
import { MoonIcon } from "../assets/icons/MoonIcon"
import { SunIcon } from "../assets/icons/SunIcon"
import PropTypes from 'prop-types'

const DarkModeToggle = ({darkMode, toggleDarkMode}) => {

	return (
		<Switch
			checked = {darkMode}
			onChange={toggleDarkMode}
			size='lg'
			color="success"
			startContent={<SunIcon/>}
			endContent={<MoonIcon/>}
		>
		</Switch>
	)
}
DarkModeToggle.propTypes = { 
	darkMode: PropTypes.bool.isRequired,
	toggleDarkMode: PropTypes.func.isRequired 
}
export default DarkModeToggle