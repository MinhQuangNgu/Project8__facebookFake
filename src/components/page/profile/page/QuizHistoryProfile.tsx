import React from "react";
import "../style.scss";
type Props = {};

const QuizHistoryProfile: React.FC = (props: Props) => {
	return (
		<div className="padding__profile border__shadow friendProfile">
			<div className="friendsNavbar">
				<div style={{ marginLeft: "1rem" }} className="__title">
					Lịch sử làm Quiz
				</div>
			</div>
			<div className="photoProfile__wrap">
				<div className="quizCard">
					<div className="quizCard__wrap">
						<div className="quizCard__image">
							<img
								src="https://haycafe.vn/wp-content/uploads/2022/07/background-dep-cho-zoom.jpg"
								alt="Quiz Image"
							/>
						</div>
						<div className="quizCard__name">
							<div className="quizCard__name-elips">
								<i>Minh Quang</i>
							</div>
						</div>
						<div className="quizCard__point">
							{Number.parseFloat("50").toFixed(2)}%
						</div>
						<div className="quizCard__time">
							{" "}
							{`${Math.floor(100 / 60) >= 10 ? "" : "0"}${Math.floor(
								100 / 60
							)} phút ${Math.floor(100 % 60) >= 10 ? "" : "0"}${Math.floor(
								100 % 60
							)}`}{" "}
							giây
						</div>
					</div>
				</div>
				<div className="quizCard">
					<div className="quizCard__wrap">
						<div className="quizCard__image">
							<img
								src="https://haycafe.vn/wp-content/uploads/2022/07/background-dep-cho-zoom.jpg"
								alt="Quiz Image"
							/>
						</div>
						<div className="quizCard__name">
							<div className="quizCard__name-elips">
								<i>Minh Quang</i>
							</div>
						</div>
						<div className="quizCard__point">
							{Number.parseFloat("50").toFixed(2)}%
						</div>
						<div className="quizCard__time">
							{" "}
							{`${Math.floor(100 / 60) >= 10 ? "" : "0"}${Math.floor(
								100 / 60
							)} phút ${Math.floor(100 % 60) >= 10 ? "" : "0"}${Math.floor(
								100 % 60
							)}`}{" "}
							giây
						</div>
					</div>
				</div>
				<div className="quizCard">
					<div className="quizCard__wrap">
						<div className="quizCard__image">
							<img
								src="https://haycafe.vn/wp-content/uploads/2022/07/background-dep-cho-zoom.jpg"
								alt="Quiz Image"
							/>
						</div>
						<div className="quizCard__name">
							<div className="quizCard__name-elips">
								<i>Minh Quang</i>
							</div>
						</div>
						<div className="quizCard__point">
							{Number.parseFloat("50").toFixed(2)}%
						</div>
						<div className="quizCard__time">
							{" "}
							{`${Math.floor(100 / 60) >= 10 ? "" : "0"}${Math.floor(
								100 / 60
							)} phút ${Math.floor(100 % 60) >= 10 ? "" : "0"}${Math.floor(
								100 % 60
							)}`}{" "}
							giây
						</div>
					</div>
				</div>
				<div className="quizCard">
					<div className="quizCard__wrap">
						<div className="quizCard__image">
							<img
								src="https://haycafe.vn/wp-content/uploads/2022/07/background-dep-cho-zoom.jpg"
								alt="Quiz Image"
							/>
						</div>
						<div className="quizCard__name">
							<div className="quizCard__name-elips">
								<i>Minh Quang</i>
							</div>
						</div>
						<div className="quizCard__point">
							{Number.parseFloat("50").toFixed(2)}%
						</div>
						<div className="quizCard__time">
							{" "}
							{`${Math.floor(100 / 60) >= 10 ? "" : "0"}${Math.floor(
								100 / 60
							)} phút ${Math.floor(100 % 60) >= 10 ? "" : "0"}${Math.floor(
								100 % 60
							)}`}{" "}
							giây
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default QuizHistoryProfile;
