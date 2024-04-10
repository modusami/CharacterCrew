import CharacterSelector from "../components/CharacterSelector";
import Gwen from "/miis/Gwen.webp";
import Abby from "/miis/Abby.webp";
import Matt from "/miis/Matt.webp";
import Lutrollshi from "/miis/Lutrollshi.webp";
import { useEffect, useState } from "react";
import { hardData } from "../data/data";

function Create() {
	const chosenCharacters = [Gwen, Abby, Matt, Lutrollshi];
	const [chosenCharacterIndex, setIndex] = useState(0);

	const [formData, setData] = useState({
		name: "",
		img: chosenCharacters[chosenCharacterIndex],
		age: "",
		category: "",
		description: "",
		hiddenDescription: "",
	});

	const handleFormDataImageChange = () => {
		setData({ ...formData, img: chosenCharacters[chosenCharacterIndex] });
	};

	const handleFormDataChange = (event) => {
		setData({ ...formData, [event.target.name]: event.target.value });
	};

	const handleCreateCharacter = () => {
		console.log(formData.img);

		// Generate a unique ID for the new character
		const id = hardData.length + 1;

		// Create a new character object
		const newCharacter = {
			id: id,
			title: formData.name,
			img: formData.img,
			category: formData.category,
			age: parseInt(formData.age),
			description: formData.description,
		};

		// Update the hardData array by adding the new character object
		hardData.push(newCharacter);

		// Reset the form fields
		setData({
			name: "",
			age: "",
			category: "",
			description: "",
		});
	};

	useEffect(() => {
		setData({ ...formData, img: chosenCharacters[chosenCharacterIndex] });
	}, [chosenCharacterIndex]);

	return (
		<>
			<div className="py-5 px-2">
				<h1 className="text-center text-3xl font-bold mb-8">Create An Ego!</h1>
				<div className="max-w-lg mx-auto">
					<form>
						<CharacterSelector
							chosenCharacters={chosenCharacters}
							index={chosenCharacterIndex}
							setIndex={setIndex}
							changeData={handleFormDataImageChange}
						/>
						<div className="mb-4">
							<label htmlFor="name" className="block mb-2 font-bold">
								Name
							</label>
							<input
								type="text"
								id="name"
								name="name"
								value={formData.name}
								onChange={handleFormDataChange}
								className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
								placeholder="Enter character name"
							/>
						</div>
						<div className="mb-4">
							<label htmlFor="age" className="block mb-2 font-bold">
								Age
							</label>
							<input
								type="number"
								id="age"
								name="age"
								value={formData.age}
								onChange={handleFormDataChange}
								className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
								placeholder="Enter character age"
							/>
						</div>
						<div className="mb-4">
							<label htmlFor="category" className="block mb-2 font-bold">
								Category
							</label>
							<select
								id="category"
								name="category"
								onChange={handleFormDataChange}
								value={formData.category}
								className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
							>
								<option value="">Select a category</option>
								<option value="criminal">Criminal</option>
								<option value="athlete">Athlete</option>
								<option value="influencer">Influener</option>
							</select>
						</div>
						<div className="mb-4">
							<label htmlFor="description" className="block mb-2 font-bold">
								Description
							</label>
							<textarea
								id="description"
								className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
								rows="4"
								name="description"
								onChange={handleFormDataChange}
								value={formData.description}
								placeholder="Enter character description"
							></textarea>
						</div>

						<div>
							<button
								type="button"
								onClick={handleCreateCharacter}
								className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none w-full"
							>
								Create Character
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}

export default Create;
