import { useRoutes } from "react-router-dom";
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
			<h1 className="text-[40px]">Alter Ego Creator</h1>
			<div className="h-[900px] w-[90vw] shadow-2xl">{elements}</div>
		</div>
	);
}

export default App;
