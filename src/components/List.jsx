import Item from "./Item"
import PropTypes from "prop-types"

export default function List({ todo, handleDelete, handleEdit }){
	if(!todo || todo.length === 0)
		return <p>No ToDo&apos;s yet</p>
	return (
	<div className="todo-list">
		{todo.map((item) =>(
			<Item key={item.id} todo={item} handleDelete={handleDelete} handleEdit={handleEdit}/>
			))}
	</div>
	)
}
List.propTypes = {
	todo: PropTypes.array.isRequired,
	handleDelete: PropTypes.func.isRequired,
	handleEdit: PropTypes.func.isRequired
}