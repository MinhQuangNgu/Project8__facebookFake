import React from "react";
import "./style.scss";
import QuizCard from "./QuizCard";
const Quiz: React.FC = () => {
	return (
		<div className="quiz">
			<div className="quiz__container">
				<QuizCard />
				<QuizCard />
			</div>
		</div>
	);
};

export default Quiz;
