import React from "react";
import "./style.scss";
import Infor from "./Infor";
import Newfeeds from "./Newfeeds";
import Friends from "./Friends";
const Home: React.FC = () => {
	return (
		<div className="home padding">
			<Infor />
			<Newfeeds />
			<Friends />
		</div>
	);
};

export default Home;
