import { useState } from "react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link } from "@nextui-org/react";

const Item = ({ todo }) =>{
	
	return (
		<Card className="max-w-[400px] todo-card">
			<CardHeader>
				<div className="flex flex-col">
					<p className="font-bold text-large">{todo.title}</p>
				</div>
			</CardHeader>
			<Divider />
				<CardBody>
					<p className="text-small">{todo.task}</p>
				</CardBody>
		</Card>
	)
}

export default Item