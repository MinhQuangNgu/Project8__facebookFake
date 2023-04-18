import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRouter } from "./routes";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useState } from "react";
declare global {
	interface Window {
		google: any;
	}
}
function App() {
	const [result, setResult] = useState({});
	const onDragEnd = (result: DropResult) => {
		setResult(result);
	};
	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<Router>
				<div className="App">
					<Routes>
						{publicRouter?.map((item) => {
							const Page = item?.element;
							if (item?.Layout) {
								const Layout = item?.Layout;
								return (
									<Route
										key={item?.path}
										path={item?.path}
										element={
											<Layout>
												<Page />
											</Layout>
										}
									/>
								);
							}
							return (
								<Route key={item?.path} path={item?.path} element={<Page />} />
							);
						})}
					</Routes>
				</div>
			</Router>
		</DragDropContext>
	);
}

export default App;
