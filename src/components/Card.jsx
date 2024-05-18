import PropTypes from 'prop-types';

const CardItem = ({ children, reverse }) =>{
	return(
		<div className={`todo-card 
			${reverse ? "light" : "dark"}
		`}>{children}</div>
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