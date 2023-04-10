import React, { useState, createContext } from "react";
import "./style.scss";
import Infor from "./Infor";
import Newfeeds from "./Newfeeds";
import Friends from "./Friends";
export const TouchContext = createContext<{
	touch: string;
	setTouch?: React.Dispatch<React.SetStateAction<string>>;
}>({
	touch: "",
});
const Home: React.FC = () => {
	const [touch, setTouch] = useState<string>("");
	return (
		<TouchContext.Provider value={{ touch, setTouch }}>
			<div className="home padding">
				<Infor />
				<Newfeeds />
				<Friends />
			</div>
		</TouchContext.Provider>
	);
};

export default Home;
