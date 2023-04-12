import React from "react";
import "./style.scss";
import QuizCard from "./QuizCard";
import { Link } from "react-router-dom";
const Quiz: React.FC = () => {
	return (
		<div className="quiz">
			<div
				style={{ marginTop: "0", padding: "1rem 0.5rem" }}
				className="draw__user"
			>
				<div style={{ padding: "0rem 1rem" }} className="draw__title">
					<div>Ảnh của bạn</div>
					<div>
						<Link to="/">Xem tất cả</Link>
					</div>
				</div>
				<QuizCard full={true} />
			</div>
			<div style={{ marginBottom: "2rem" }} className="quiz__container">
				<QuizCard />
				<QuizCard />
			</div>
		</div>
	);
};

export default Quiz;
