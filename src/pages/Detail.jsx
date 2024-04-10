import { useParams } from "react-router-dom";
import { hardData } from "../data/data";
import { useState } from "react";
import Character from "../components/Character";

function Detail() {
	let params = useParams();

	const [charData, setCharData] = useState(hardData[params.id - 1]);

	return (
		<>
			<div className="py-5 px-2">
				<h1 className="text-center text-3xl font-bold">Detail Page</h1>
				<div className="mx-auto rounded-lg bg-blue-50 w-[70%] text-center">
					<Character title={charData.title} age={charData.age} id={params.id} />
					<p>Category: {charData.category}</p>
					<p>Description: {charData.description}</p>
				</div>
			</div>
		</>
	);
}

export default Detail;
