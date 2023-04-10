import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

const QuizCard: React.FC = () => {
	return (
		<div className="quizCard">
			<div className="quizCard__wrap">
				<Link to={`/quiz/detail/${2}`}>
					<div className="quizCard__image">
						<img
							src="https://anhcuoiviet.vn/wp-content/uploads/2022/11/background-dep-0.jpg"
							alt="Quiz Image"
						/>
					</div>
				</Link>
				<div className="quizCard__name">
					<Link style={{ textDecoration: "none" }} to={`/quizDetail/${2}`}>
						<div className="quizCard__name-elips">
							<i>Minh Quang</i>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default QuizCard;
