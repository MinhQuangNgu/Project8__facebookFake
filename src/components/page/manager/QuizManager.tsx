import React from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import QuizCreate from "./QuizCreate";
type Props = {};

const QuizManager: React.FC = (props: Props) => {
	const navigate = useNavigate();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<div className="quizManager">
			<div className="quizManager__title">
				<div
					onClick={() => {
						navigate(-1);
					}}
					className="quizManager__title__home"
				>
					<i className="fa-solid fa-house"></i>
				</div>
				<div className="quizManager__title_button">
					<button>Tạo mới</button>
				</div>
			</div>
			<QuizCreate />
		</div>
	);
};

export default QuizManager;
