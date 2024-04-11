import Character from "../components/Character";
import { supabase } from "../server/client";
import { useState, useEffect } from "react";

function Home() {
	const [mates, setMates] = useState(null);

	useEffect(() => {
		const fetchPosts = async () => {
			const { data } = await supabase
				.from("Crewmates")
				.select()
				.order("created_at", { ascending: true });
			setMates(data);
		};
		fetchPosts();
	}, []);

	return (
		<div className="container mx-auto py-8">
			<h1 className="text-4xl font-bold text-center mb-8">Say hello To Your Crewmates!</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 overflow-auto px-4 sm:px-6 lg:px-8">
				{mates && mates.length > 0 ? (
					mates.map((i, index) => (
						<Character
							key={index}
							name={i.name}
							age={i.age}
							img={i.img}
							category={i.category}
							id={i.id}
							description={i.description}
						/>
					))
				) : (
					<h2 className="text-center text-3xl">No Crew Mates Yet</h2>
				)}
			</div>
		</div>
	);
}

export default Home;
