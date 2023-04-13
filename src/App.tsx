import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRouter } from "./routes";
declare global {
	interface Window {
		google: any;
	}
}
function App() {
	return (
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
	);
}

export default App;
