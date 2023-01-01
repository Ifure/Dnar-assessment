import "./App.scss";
import { Routes, Route } from "react-router-dom";
import IndexPage from "./Pages";
import Dashboard from "./Pages/dashboard";

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route exact path='/' element={<IndexPage />} />
				<Route exact path='/dashboard' element={<Dashboard />} />
			</Routes>
		</div>
	);
}

export default App;
