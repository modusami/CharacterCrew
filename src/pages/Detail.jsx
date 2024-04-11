import { useParams, Link } from "react-router-dom";
import { hardData } from "../data/data";
import { useEffect, useState } from "react";
import { editPath } from "../data/data";
import { ageOver100, ageUnder20, ageUnder100 } from "../data/hidden_data";
import Character from "../components/Character";
import { supabase } from "../server/client";

function Detail() {
	let params = useParams();

	const [charData, setCharData] = useState(null);

	useEffect(() => {
		const fectchCrewMate = async () => {
			const { data } = await supabase.from("Crewmates").select().eq("id", params.id);
			setCharData(data[0]);
		};
		fectchCrewMate();
	}, [params.id]);

	const onDelete = async (event) => {
		event.preventDefault();
		await supabase.from("Crewmates").delete().eq("id", params.id);
		window.location = "/";
	};

	return (
		<>
			{charData ? (
				<>
					<div className="py-5 px-2">
						<h1 className="text-center text-3xl font-bold uppercase">
							{charData.name}
						</h1>
						<div className="mx-auto rounded-lg w-[50%] text-center">
							<Character
								img={charData.img}
								name={charData.name}
								age={charData.age}
								id={params.id}
								showAge={false}
								showName={false}
							/>
							<h3 className="text-xl">Age: {charData.age}</h3>
							<p className="text-xl">{charData.category.toUpperCase()}</p>
							<p className="font-bold">{charData.description}</p>
							<p className="font-serif mt-3">
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
								<button
									onClick={onDelete}
									className="text-2xl hover:font-bold bg-red-50 active:bg-red-200 p-5 rounded-sm shadow-md"
								>
									Delete Character
								</button>
							</div>
						</div>
					</div>
				</>
			) : (
				<>
					<div className="text-3xl text-center">
						<h2>Loading...</h2>
					</div>
				</>
			)}
		</>
	);
}

export default Detail;
