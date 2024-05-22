import PropTypes from 'prop-types';
//turn off reverse for switching dark mode
	// <div className={`todo-card 
	// 		${reverse ? "light" : "dark"}
	// `}>{children}</div>
const CardItem = ({ children, reverse }) =>{
	return(
		<div className={`todo-card`}>{children}</div>
	)
}

CardItem.defaultProps = {
	reverse: false
}
CardItem.propTypes = {
	children: PropTypes.node.isRequired,
	reverse: PropTypes.bool
}
export default CardItem