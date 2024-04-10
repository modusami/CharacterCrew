import { Link } from "react-router-dom";
import default_character from "/cdefault.png";
import { egoDetailPage } from "../data/data";

function Character({ id, title, age }) {
	const defaultText =
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste similique voluptatem optio, molestias impedit blanditiis, unde laudantium velit tempora minima culpa quam reprehenderit assumenda ab iure dolore, tenetur dolorem. Ad!";

	return (
		<div className="flex flex-col">
			<div className="flex-1 flex items-center justify-center">
				<Link to={egoDetailPage + "/" + id}>
					<img src={default_character} alt="default Character" className="object-cover" />
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
