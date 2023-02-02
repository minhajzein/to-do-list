import React from "react";
import { useState } from "react";

//library imports

function CustomForm({ addTask }) {
	const [task, setTask] = useState("");
	const handleFormSubmit = e => {
		e.preventDefault();
		addTask({
			name: task,
			checked: false,
			id: Date.now(),
		});
		setTask("");
	};
	return (
		<form className="todo" onSubmit={handleFormSubmit}>
			<div className="wrapper">
				<input
					onInput={e => setTask(e.target.value)}
					value={task}
					className="input"
					type="text"
					name=""
					id="task"
					required
					autoFocus
					maxLength={60}
					placeholder="Enter Task"
				/>
				<label className="label" htmlFor="task">
					Enter Task
				</label>
			</div>
			<button className="btn" aria-label="Add Task" type="submit">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-6 h-6"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M12 4.5v15m7.5-7.5h-15"
					/>
				</svg>
			</button>
		</form>
	);
}

export default CustomForm;
