function CharacterSelector({ chosenCharacters = [], index, setIndex }) {
	const handleRightArrow = (e) => {
		const newIndex = index < chosenCharacters.length - 1 ? index + 1 : 0;
		setIndex(newIndex);
	};

	const handleLeftArrow = (e) => {
		const newIndex = index > 0 ? index - 1 : chosenCharacters.length - 1;
		setIndex(newIndex);
	};

	return (
		<>
			<div className="flex mx-auto w-[80%]">
				<div onClick={handleLeftArrow}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						width="24"
						height="24"
					>
						<path d="M14 6l1.41 1.41L10.83 12l4.58 4.59L14 18l-6-6z" />
					</svg>
				</div>
				<div>
					<img src={chosenCharacters[index]} alt="character" />
				</div>
				<div onClick={handleRightArrow}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						width="24"
						height="24"
					>
						<path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
					</svg>
				</div>
			</div>
		</>
	);
}

export default CharacterSelector;
