import { Link, useRoutes } from "react-router-dom";
import { homePath } from "./data/data";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";

function App() {
	let elements = useRoutes([
		{
			path: homePath,
			element: <Home />,
		},
		{
			path: "*",
			element: <NoPage />,
		},
	]);

	return (
		<div className="min-h-screen flex justify-center items-center flex-col gap-10">
			<nav>
				<ul>
					<li>
						<Link to={homePath}>Home</Link>
					</li>
				</ul>
			</nav>
			<div className="h-[900px] w-[90vw] shadow-2xl">{elements}</div>
		</div>
	);
}

export default App;
