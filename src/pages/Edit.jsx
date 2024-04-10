import { hardData } from "../data/data";
import { useParams } from "react-router-dom";
import default_character from "/cdefault.png";
import { useState } from "react";

function Edit() {
	let params = useParams();

	const [charData, setData] = useState(hardData[params.id - 1]);

	const [newCharDetails, setCharDetails] = useState({
		name: charData.name,
		age: charData.age,
		category: charData.category,
		description: charData.description,
	});

	const handleChangeDetails = (event) => {
		console.log(event.target.value);
		setCharDetails(newCharDetails, { [event.target.name]: event.target.value });
	};

	return (
		<div className="mx-auto rounded-lg w-[70%] text-center">
			<div className="flex flex-col">
				<div className="flex-1 flex items-center justify-center">
					<img src={default_character} alt="default Character" className="object-cover" />
				</div>
				<div className="mt-4">
					<h1 className="text-xl font-bold">
						<label htmlFor="title">Title:</label>
						<input type="text" name="title" id="title" value={charData.title} />
					</h1>
					<h2 className="text-lg">
						<label htmlFor="age">Age:</label>
						<input type="text" id="age" name="age" value={charData.age} />
					</h2>
				</div>
			</div>
			<p>
				<label htmlFor="category"></label>
				<input
					type="text"
					name="category"
					id="category"
					onChange={handleChangeDetails}
					value={newCharDetails.name}
				/>
			</p>
			<p>
				<label htmlFor="description"></label>
				<input
					name="description"
					id="description"
					type="text"
					onChange={handleChangeDetails}
					value={newCharDetails.description}
				></input>
			</p>
			<div>
				<button type="button" className="p-5 text-black bg-green-50 hover:bg-green-200">
					Save
				</button>
			</div>
		</div>
	);
}

export default Edit;
