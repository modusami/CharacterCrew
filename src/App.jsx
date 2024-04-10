import { Link, useRoutes } from "react-router-dom";
import { homePath, createPath, egoDetailPage } from "./data/data";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Create from "./pages/Create";
import Detail from "./pages/Detail";

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
		{
			path: createPath,
			element: <Create />,
		},
		{
			path: egoDetailPage,
			element: <Detail />,
		},
	]);

	return (
		<div className="min-h-screen flex justify-center items-center flex-col gap-10">
			<nav>
				<ul className="flex gap-10">
					<li>
						<Link to={homePath}>Home</Link>
					</li>
					<li>
						<Link to={createPath}>Create</Link>
					</li>
				</ul>
			</nav>
			<div className="h-[900px] w-[90vw] shadow-2xl">{elements}</div>
		</div>
	);
}

export default App;
