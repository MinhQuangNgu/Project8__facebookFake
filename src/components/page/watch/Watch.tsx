import React, { useState } from "react";
import "./style.scss";
import NewFeedCard from "../../card/NewFeedCard";
import WatchCard from "./WatchCard";
const Watch: React.FC = () => {
	const [touchCard, setTouchCard] = useState<number>(-1);
	return (
		<div className="watch">
			<div className="watch__container">
				<WatchCard
					index={0}
					touchCard={touchCard}
					setTouchCard={setTouchCard}
				/>
			</div>
		</div>
	);
};

export default Watch;
