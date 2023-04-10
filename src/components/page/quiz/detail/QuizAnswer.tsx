import React from "react";
interface props {
	item: string;
	setAnswer: React.Dispatch<React.SetStateAction<string | null>>;
	answer: string | null;
	correct: string;
	index: number;
}
const QuizAnswer: React.FC<{
	index: number;
}> = ({ index }) => {
	return (
		<div className="quiz__answer__container">
			<label
				className={`quiz__answer__items item_${index} ${
					false ? (2 === 2 ? "success" : "error") : ""
				}`}
			>
				{2}
			</label>
		</div>
	);
};

export default QuizAnswer;
