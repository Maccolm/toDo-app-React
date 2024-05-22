import { useState } from "react"
import { Card, CardHeader } from "@nextui-org/card"
import Button from "./Button"
import { Divider } from "@nextui-org/react"

const Form = () => {
	return (
		<Card className="max-w-[400px] w-[100%] form-card">
			<CardHeader className="p-0 justify-stretch">
				<form className="">
					<h1 className="todo-card__title">Add a new Todo</h1>
					<Divider className="p-0"/>
					<div className="p-3 label-container">
						<label  for='title'>
							<p>Title</p>
						</label>
						<div className="input-container">
							<input type="text" id="title" />
						</div>
					</div>
				</form>
			</CardHeader>
		</Card>
	)
}
export default Form