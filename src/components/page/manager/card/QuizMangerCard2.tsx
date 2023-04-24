import React from "react";
import { Draggable } from "react-beautiful-dnd";

type Props = {
	index: number;
};

const QuizMangerCard2: React.FC<Props> = ({ index }) => {
	return (
		<Draggable
			index={index}
			draggableId={index?.toString() + "QuizManagerCard2"}
		>
			{(provided) => (
				<div
					ref={provided.innerRef}
					{...provided.dragHandleProps}
					{...provided.draggableProps}
					className="quizMangerCard__2"
				>
					<div>
						<img
							src="https://img.meta.com.vn/Data/image/2021/09/30/background-la-gi-anh-background-dep-3.jpg"
							alt="Ảnh"
						/>
					</div>
					<div>Nguyễn Minh Quang?</div>
				</div>
			)}
		</Draggable>
	);
};

export default QuizMangerCard2;
