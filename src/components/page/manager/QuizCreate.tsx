import React from "react";
import "./style.scss";
type Props = {};

const QuizCreate: React.FC = (props: Props) => {
	return (
		<div className="quizCreate">
			<div className="quizCreate__wrap">
				<div className="quizCreate__title">
					<i>Tạo mới</i>
					<div className="quizCreate__times">&times;</div>
				</div>
				<div className="quizCreate__body">
					<div className="quizCreate__body__1"></div>
					<div className="quizCreate__body__2"></div>
				</div>
			</div>
		</div>
	);
};

export default QuizCreate;
