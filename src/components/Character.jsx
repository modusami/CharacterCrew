import { Link } from "react-router-dom";
import default_character from "/cdefault.png";
import { egoDetailPage } from "../data/data";

function Character({ id, img, name, age, showAge = true, showName = true }) {
	return (
		<div className="flex flex-col">
			<Link to={egoDetailPage + "/" + id}>
				<div className="flex-1 flex items-center justify-center">
					<img
						src={img ? img : default_character}
						alt="default Character"
						className="object-cover w-[200px] h-[200px]"
					/>
				</div>
				<div className="mt-4">
					{showName && (
						<h1 className="text-xl font-bold">{name ? name : "Default Character"}</h1>
					)}

					{showAge && <h2 className="text-lg">Age: {age ? age : "0"}</h2>}
				</div>
			</Link>
		</div>
	);
}

export default Character;
