import { useParams, Link } from "react-router-dom";
import { hardData } from "../data/data";
import { useState } from "react";
import { editPath } from "../data/data";
import { ageOver100, ageUnder20, ageUnder100 } from "../data/hidden_data";
import Character from "../components/Character";

function Detail() {
	let params = useParams();

	const [charData, setCharData] = useState(hardData[params.id - 1]);

	return (
		<>
			<div className="py-5 px-2">
				<h1 className="text-center text-3xl font-bold">Character Details!</h1>
				<div className="mx-auto rounded-lg w-[70%] text-center">
					<Character
						img={charData.img}
						title={charData.title}
						age={charData.age}
						id={params.id}
					/>
					<p>Category: {charData.category}</p>
					<p>Description: {charData.description}</p>
					<p>
						{charData.age <= 20
							? ageUnder20[charData.category]
							: charData.age <= 100
							? ageUnder100[charData.category]
							: ageOver100[charData.category]}
					</p>
				</div>
				<div className="w-[70%] flex mx-auto mt-8">
					<div className="flex-1 text-center">
						<Link to={editPath + params.id}>
							<button className="text-2xl hover:font-bold bg-blue-50 active:bg-blue-200 p-5 rounded-sm shadow-md">
								Edit Character
							</button>
						</Link>
					</div>
					<div className="flex-1 text-center">
						<button className="text-2xl hover:font-bold bg-red-50 active:bg-red-200 p-5 rounded-sm shadow-md">
							Delete Character
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default Detail;
