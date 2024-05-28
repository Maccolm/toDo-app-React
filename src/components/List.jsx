import Item from "./Item"

export default function List({ todo, handleDelete, handleEdit }){
	if(!todo || todo.length === 0)
		return <p>No ToDo's yet</p>
	return (
	<div className="todo-list">
		{todo.map((item) =>(
			<Item key={item.id} todo={item} handleDelete={handleDelete} handleEdit={handleEdit}/>
			))}
	</div>
	)
}