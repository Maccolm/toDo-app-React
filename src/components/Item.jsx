import { useState } from "react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link } from "@nextui-org/react";

const Item = () =>{
	const [title, setTitle] = useState("Title");
	const [task, setTask] = useState("Task to do");
	return (
		<Card className="py-4">
			<CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
				<div className="flex flex-col">
					<p className="font-bold text-large">{title}</p>
				</div>
			</CardHeader>
			<Divider className="my-4" />
				<CardBody>
					<p className="text-small">{task}</p>
				</CardBody>
		</Card>
	)
}

export default Item