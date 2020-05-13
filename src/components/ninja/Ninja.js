import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addNinjaAction, deleteNinjaAction } from "../../actions";

import styles from "./Ninja.module.css";
import { useRef } from "react";

export function Ninja() {
	const ninjasToShow = useSelector((state) => state.ninjas);

	const dispatch = useDispatch();
	const addNinja = (ninja) => dispatch(addNinjaAction(ninja));
	const deleteNinja = (id) => dispatch(deleteNinjaAction(id));

	const [name, setName] = useState("");
	const [age, setAge] = useState("");
	const [belt, setBelt] = useState("");
	const nameRef = useRef("");

	const handleSubmit = (e) => {
		e.preventDefault();
		addNinja({ name, age, belt, id: ninjasToShow.length + 1 });
		setName("");
		setAge("");
		setBelt("");
		nameRef.current.focus();
	};

	return (
		<div>
			<div>
				{ninjasToShow.map((ninja) => (
					<div key={ninja.id} onClick={() => deleteNinja(ninja.id)}>
						{ninja.name} - {ninja.age} - {ninja.belt}
					</div>
				))}
			</div>
			<div className={styles.row}>
				<form onSubmit={handleSubmit}>
					<label htmlFor="Name">Name</label>
					<input
						type="text"
						onChange={(e) => setName(e.target.value)}
						value={name}
						ref={nameRef}
					/>
					<label htmlFor="age">Age</label>
					<input
						type="text"
						onChange={(e) => setAge(e.target.value)}
						value={age}
					/>
					<label htmlFor="belt">Belt</label>
					<input
						type="text"
						onChange={(e) => setBelt(e.target.value)}
						value={belt}
					/>

					<input type="submit" value="Add Ninja" />
				</form>
			</div>
		</div>
	);
}
