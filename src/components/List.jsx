import Item from "./Item"

export default function List({ todo }){
	return (
	<div className="todo-list">
		{todo.map((item) =>(
			<Item key={item.id} todo={item}/>
			))}
	</div>
	)
}