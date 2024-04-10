import { hardData } from "../data/data";
import { useParams } from "react-router-dom";
import default_character from "/cdefault.png";
import { useState } from "react";

function Edit() {
	let params = useParams();
	const [charData, setData] = useState(hardData[params.id - 1]);
	const [formData, setFormData] = useState({
		name: charData.name,
		age: charData.age,
		category: charData.category,
		description: charData.description,
	});

	const handleFormDataChange = (event) => {
		setFormData({
			...formData,
			[event.target.name]: event.target.value,
		});
	};

	const handleSaveData = (event) => {
		event.preventDefault();
		const newCharacter = {
			id: params.id,
			name: formData.name,
			img: charData.img,
			category: formData.category,
			age: parseInt(formData.age),
			description: formData.description,
		};
		hardData[params.id - 1] = newCharacter;
	};

	return (
		<div className="py-5 px-2">
			<h1 className="text-center text-3xl font-bold mb-8">Create An Ego!</h1>
			<div className="max-w-lg mx-auto">
				<form>
					<div className="w-[70%] mx-auto">
						<img
							src={charData.img || default_character}
							alt="Character"
							className="object-cover"
						/>
					</div>
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
							onClick={handleSaveData}
							className="bg-green-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none w-full"
						>
							Save
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Edit;
