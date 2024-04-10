function Create() {
	return (
		<>
			<div className="py-5 px-2">
				<h1 className="text-center text-3xl font-bold mb-8">Create An Ego!</h1>
				<div className="max-w-lg mx-auto">
					<form>
						<div className="mb-4">
							<label htmlFor="name" className="block mb-2 font-bold">
								Name
							</label>

							<div className="mb-4">
								<label htmlFor="image" className="block mb-2 font-bold">
									Character Image
								</label>
								<input
									type="file"
									id="image"
									className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
									accept="image/*"
								/>
							</div>
							<input
								type="text"
								id="name"
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
								className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
							>
								<option value="">Select a category</option>
								<option value="category1">Category 1</option>
								<option value="category2">Category 2</option>
								<option value="category3">Category 3</option>
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
								placeholder="Enter character description"
							></textarea>
						</div>

						<div>
							<button
								type="submit"
								className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
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
