import React, { useState } from "react";
import "../style.scss";
import { Link } from "react-router-dom";
type Props = {};

const QuizProfile: React.FC = (props: Props) => {
	const [quizNumber, setQuizNumber] = useState<number>(-1);
	return (
		<div className="padding__profile border__shadow friendProfile">
			<div className="friendsNavbar">
				<div style={{ marginLeft: "1rem" }} className="__title">
					Quiz của bạn
				</div>
				<div style={{ marginRight: ".5rem" }} className="friendsNavbar__items">
					<Link className="__link" to="/quiz/manager">
						Quản lý / tạo mới Quiz
					</Link>
				</div>
			</div>
			<div className="photoProfile__wrap">
				<div className="quizProfile__items">
					<div className="quizProfile__items__card">
						<img
							src="https://png.pngtree.com/background/20210714/original/pngtree-beautiful-cherry-blossom-branches-pink-gradient-background-picture-image_1229070.jpg"
							alt=""
						/>
						<div className="quizProfile__items__name">
							<i>Minh Quang Dep Zai MInh Quang Dep Zai MInh Quang Dep Zai</i>
						</div>
						<div className="quizProfile__items__edit">
							<div
								onClick={() => {
									setQuizNumber((prev) => prev + 1);
								}}
							>
								<i className="fa-solid fa-ellipsis"></i>
							</div>
						</div>
						{quizNumber === 1 && (
							<div className="quizProfile__item__bars">
								<div className="quizProfile__item__bars__items">Xóa</div>
								<div className="quizProfile__item__bars__items">Cập nhật</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default QuizProfile;
