import PropTypes from "prop-types";
import { BsPlus } from "react-icons/bs";

const Button = ({ children, type ='button', isDisabled = false}) =>{
	return <button type={type} disabled={isDisabled} className="btn flex items-center rounded-lg" >
		<BsPlus fontSize='52px'/>
		{children}
	</button>
}

Button.PropTypes = {
	children: PropTypes.node.isRequired,
	type: PropTypes.string,
	isDisabled: PropTypes.bool,
}
export default Button