import React, { useContext } from "react";
import "./style.scss";
import { TouchContext } from "./Home";
const Friends: React.FC = () => {
	const { setTouch } = useContext(TouchContext);
	return (
		<div
			onClick={() => {
				if (setTouch) {
					setTouch("friends");
				}
			}}
			className="header__infor"
		>
			Friends
		</div>
	);
};

export default Friends;
