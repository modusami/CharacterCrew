import Character from "../components/Character";
import { hardData } from "../data/data";

function Home() {
	return (
		<>
			<div className="py-5 px-2">
				<h1 className="text-center text-4xl font-bold">Say hello To Your Crewmates!</h1>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 overflow-auto p-10">
					{hardData.map((i, index) => {
						return (
							<Character
								key={index}
								title={i.title}
								age={i.age}
								category={i.category}
								id={i.id}
								description={i.description}
							/>
						);
					})}
				</div>
			</div>
		</>
	);
}

export default Home;
