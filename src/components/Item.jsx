import { Card, CardHeader, CardBody, CardFooter, Divider, Link } from "@nextui-org/react";
import CardItem from "./Card";

const Item = ({ todo }) =>{
	
	return (
		<CardItem>
			<Card className="max-w-[400px] todo-card__container">
				<CardHeader>
					<div className="todo-card__title">
						<p className="font-bold ">{todo.title}</p>
					</div>
				</CardHeader>
				<Divider />
					<CardBody>
					<p className="text-small todo-card__task">{todo.task}</p>
					</CardBody>
			</Card>
		</CardItem>
	)
}

export default Item