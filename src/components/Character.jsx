import { Link } from "react-router-dom";
import default_character from "/cdefault.png";
import { egoDetailPage } from "../data/data";

function Character({ id, img, title, age }) {
	return (
		<div className="flex flex-col">
			<div className="flex-1 flex items-center justify-center">
				<Link to={egoDetailPage + "/" + id}>
					<img
						src={img ? img : default_character}
						alt="default Character"
						className="object-cover"
					/>
				</Link>
			</div>
			<div className="mt-4">
				<h1 className="text-xl font-bold">{title ? title : "Default Character"}</h1>
				<h2 className="text-lg">Age: {age ? age : "0"}</h2>
			</div>
		</div>
	);
}

export default Character;
