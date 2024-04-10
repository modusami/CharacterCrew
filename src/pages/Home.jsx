import Character from "../components/Character";
import { hardData } from "../data/data";

function Home() {
	return (
		<div className="container mx-auto py-8">
			<h1 className="text-4xl font-bold text-center mb-8">Say hello To Your Crewmates!</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 overflow-auto px-4 sm:px-6 lg:px-8">
				{hardData.map((i, index) => (
					<Character
						key={index}
						title={i.title}
						age={i.age}
						img={i.img}
						category={i.category}
						id={i.id}
						description={i.description}
					/>
				))}
			</div>
		</div>
	);
}

export default Home;
