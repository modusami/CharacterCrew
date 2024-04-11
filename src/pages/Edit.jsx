import { hardData } from "../data/data";
import { useParams } from "react-router-dom";
import default_character from "/cdefault.png";
import { useState, useEffect } from "react";
import { supabase } from "../server/client";

function Edit() {
	let params = useParams();
	const [charData, setCharData] = useState(null);
	const [formData, setFormData] = useState(null);
	const [errorMessage, setErrorMessage] = useState("");

	useEffect(() => {
		const fectchCrewMate = async () => {
			const { data } = await supabase.from("Crewmates").select().eq("id", params.id);
			setCharData(data[0]);
		};
		fectchCrewMate();
	}, [params.id]);

	useEffect(() => {
		if (charData != null) {
			setFormData({
				name: charData.name,
				age: charData.age,
				description: charData.description,
				category: charData.category,
			});
		}
	}, [charData]);

	const handleFormDataChange = (event) => {
		setFormData({
			...formData,
			[event.target.name]: event.target.value,
		});
	};

	const checkInputData = (data) => {
		if (!data) {
			return false;
		}
		return true;
	};

	const handleSaveData = async (event) => {
		event.preventDefault();
		if (
			checkInputData(formData.name) &&
			checkInputData(formData.age) &&
			checkInputData(formData.category)
		) {
			const newCharacter = {
				name: formData.name,
				category: formData.category,
				age: formData.age,
				description: formData.description,
			};

			await supabase.from("Crewmates").update(newCharacter).eq("id", params.id);
			setErrorMessage("");
			window.location = "/";
		}

		setErrorMessage("Fill in the required fields: [Name, Age, Category]");
	};

	return (
		<>
			{formData ? (
				<>
					<div className="py-5 px-2">
						<h1 className="text-center text-3xl font-bold mb-8">Edit Crewmate</h1>
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
								<div className="mt-3">
									<p className="text-red-500 font-bold">{errorMessage}</p>
								</div>
							</form>
						</div>
					</div>
				</>
			) : (
				<>
					<h2>Loading...</h2>
				</>
			)}
		</>
	);
}

export default Edit;
