import React, { useState } from "react";
import { Droppable } from "react-beautiful-dnd";
import QuizManagerCard from "../card/QuizManagerCard";
import QuizMangerCard2 from "../card/QuizMangerCard2";
interface props {}
const ListQuestionManager: React.FC<props> = () => {
	const [mode, setMode] = useState<boolean>(false);
	return (
		<div className="ListManager__wrap">
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
					<Droppable droppableId="quizCreateCard">
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
					<Droppable droppableId="quizCreateCard2">
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
	);
};

export default ListQuestionManager;
