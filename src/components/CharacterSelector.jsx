function CharacterSelector({ chosenCharacters = [], index, setIndex }) {
	const handleRightArrow = (e) => {
		e.stopPropagation();
		const newIndex = index < chosenCharacters.length - 1 ? index + 1 : 0;
		setIndex(newIndex);
	};

	const handleLeftArrow = (e) => {
		e.stopPropagation();
		const newIndex = index > 0 ? index - 1 : chosenCharacters.length - 1;
		setIndex(newIndex);
	};

	return (
		<>
			<div className="flex mx-auto w-[80%] h-[300px]">
				<div
					onClick={handleLeftArrow}
					className="w-[10%] flex mr-5 justify-center items-center hover:cursor-pointer"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						width="44"
						height="44"
					>
						<path d="M14 6l1.41 1.41L10.83 12l4.58 4.59L14 18l-6-6z" />
					</svg>
				</div>
				<div className="flex-1 flex justify-center items-center">
					<img
						src={chosenCharacters[index]}
						alt="character"
						className="w-[100%] object-cover"
					/>
				</div>
				<div
					onClick={handleRightArrow}
					className="flex ml-5 w-[10%] justify-center items-center hover:cursor-pointer"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						width="44"
						height="44"
					>
						<path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
					</svg>
				</div>
			</div>
		</>
	);
}

export default CharacterSelector;
