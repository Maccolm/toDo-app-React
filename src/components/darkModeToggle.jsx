import { Switch } from "@nextui-org/react"
import { MoonIcon } from "../assets/icons/MoonIcon"
import { SunIcon } from "../assets/icons/SunIcon"

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

export default DarkModeToggle