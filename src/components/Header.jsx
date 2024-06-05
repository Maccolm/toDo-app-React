import PropTypes from "prop-types"
export default function Header({ darkMode }){
	return (
		<div className={`header ${darkMode ? 'header-dark' : 'header-light'}`} ><p>Todo app</p></div>
	)
}
Header.propTypes = {
	darkMode: PropTypes.bool.isRequired
}