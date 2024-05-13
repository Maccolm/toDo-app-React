import { useState } from "react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link } from "@nextui-org/react";

const Item = () =>{
	const [title, setTitle] = useState("Title");
	const [task, setTask] = useState("Task to do");
	return (
		<Card className="max-w-[400px]">
			<CardHeader>
				<div className="flex flex-col">
					<p className="font-bold text-large">{title}</p>
				</div>
			</CardHeader>
			<Divider />
				<CardBody>
					<p className="text-small">{task}</p>
				</CardBody>
		</Card>
	)
}

export default Item