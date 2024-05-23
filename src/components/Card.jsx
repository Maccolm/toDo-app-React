import PropTypes from 'prop-types';
//turn off reverse for switching dark mode
	// <div className={`todo-card 
	// 		${reverse ? "light" : "dark"}
	// `}>{children}</div>
const CardItem = ({ children, reverse, create }) =>{
	return(
		<div 
			className={`todo-card rounded-large`}
		>{children}</div>
	)
}

CardItem.defaultProps = {
	reverse: false,
	create: false
}
CardItem.propTypes = {
	children: PropTypes.node.isRequired,
	reverse: PropTypes.bool,
	create: PropTypes.bool
}
export default CardItem