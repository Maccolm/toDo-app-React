import PropTypes from 'prop-types';

const CardItem = ({ children }) =>{
	return(
		<div 
			className={`todo-card rounded-large`}
		>{children}</div>
	)
}

CardItem.propTypes = {
	children: PropTypes.node.isRequired,
	reverse: PropTypes.bool,
	create: PropTypes.bool
}
export default CardItem