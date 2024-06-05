import { authenticate } from "../helpers"
import { Navigate } from "react-router-dom"
import PropTypes from 'prop-types'

const PrivateRoute = ({children}) => {
	const auth = authenticate()
	return auth ? children : <Navigate to='/login'/>
}
PrivateRoute.propTypes = {
	children: PropTypes.node.isRequired
}
export default PrivateRoute