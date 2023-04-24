import React, { useState } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import QuizManagerCard from "./card/QuizManagerCard";
import QuizMangerCard2 from "./card/QuizMangerCard2";
type Props = {};

const QuizManager: React.FC = (props: Props) => {
	const [mode, setMode] = useState<boolean>(false);
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
					<button
						onClick={() => {
							navigate("/quiz/manager/create");
						}}
					>
						Tạo mới
					</button>
				</div>
			</div>
			<div className="quizManager__detail">
				<Droppable droppableId="mainCard">
					{(provided) => (
						<div ref={provided.innerRef} className="quizManger__detail__1">
							<Draggable index={1} draggableId="1">
								{(item) => (
									<div
										ref={item.innerRef}
										{...item.draggableProps}
										{...item.dragHandleProps}
										className="quizManager__detail__card"
									>
										<img
											src="https://seotrends.com.vn/wp-content/uploads/2021/07/background-bong-bong-nuoc_111421319.jpg"
											alt="Ảnh"
										/>
										<div className="quizManager__detail__card__title">
											<i>
												Hello Anh Quang Hello Anh Quang Hello Anh Quang Hello
												Anh Quang
											</i>
										</div>
										<div className="quizManager__detail__card__number">
											12 câu
										</div>
										<div className="quizManager__detail__card__time">
											12:20s
										</div>
									</div>
								)}
							</Draggable>
							<Draggable index={2} draggableId="2">
								{(item) => (
									<div
										ref={item.innerRef}
										{...item.draggableProps}
										{...item.dragHandleProps}
										className="quizManager__detail__card"
									>
										<img
											src="https://seotrends.com.vn/wp-content/uploads/2021/07/background-bong-bong-nuoc_111421319.jpg"
											alt="Ảnh"
										/>
										<div className="quizManager__detail__card__title">
											<i>
												Hello Anh Quang Hello Anh Quang Hello Anh Quang Hello
												Anh Quang
											</i>
										</div>
										<div className="quizManager__detail__card__number">
											12 câu
										</div>
										<div className="quizManager__detail__card__time">
											12:20s
										</div>
									</div>
								)}
							</Draggable>
							{provided.placeholder}
						</div>
					)}
				</Droppable>
				<div className="quizManger__detail__2">
					<div className="quizManger__detail__2__mode">
						<div>
							<i>Hiện tất cả</i>
						</div>
						<label className="__label" htmlFor="mode">
							<div className={`__abs ${!mode ? "all" : "name"}`}></div>
						</label>
						<div>
							<i>Chỉ hiện câu hỏi</i>
						</div>
						<input
							onChange={(e) => {
								setMode(e.target.checked);
							}}
							hidden
							id="mode"
							type="checkbox"
						/>
					</div>
					{!mode && (
						<Droppable droppableId="quizMangerCard">
							{(provided) => (
								<div ref={provided.innerRef}>
									<QuizManagerCard index={1} />
									<QuizManagerCard index={2} />
									{provided.placeholder}
								</div>
							)}
						</Droppable>
					)}
					{mode && (
						<Droppable droppableId="quizMangerCard2">
							{(provided) => (
								<div ref={provided.innerRef}>
									<QuizMangerCard2 index={1} />
									<QuizMangerCard2 index={2} />
									{provided.placeholder}
								</div>
							)}
						</Droppable>
					)}
				</div>
			</div>
		</div>
	);
};

export default QuizManager;
