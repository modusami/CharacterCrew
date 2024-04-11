import { Link, useRoutes } from "react-router-dom";
import { homePath, createPath, egoDetailPage, editPath } from "./data/data";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Create from "./pages/Create";
import Detail from "./pages/Detail";
import Edit from "./pages/Edit";

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
			path: egoDetailPage + "/:id",
			element: <Detail />,
		},
		{
			path: editPath + ":id",
			element: <Edit />,
		},
	]);

	return (
		<div className="min-h-screen flex justify-center items-center flex-col gap-10">
			<nav className="m-10">
				<ul className="flex gap-10">
					<li className="text-2xl hover:font-bold">
						<Link to={homePath}>Home</Link>
					</li>
					<li className="text-2xl hover:text-green-800">
						<Link to={createPath}>Create</Link>
					</li>
				</ul>
			</nav>
			<div className=" min-h-[100vh] w-[90vw]">{elements}</div>
		</div>
	);
}

export default App;
