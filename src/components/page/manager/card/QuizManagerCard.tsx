import React from "react";
import { Draggable } from "react-beautiful-dnd";

type Props = {
	index: number;
};

const QuizManagerCard: React.FC<Props> = ({ index }) => {
	return (
		<Draggable
			index={index}
			draggableId={index?.toString() + "QuizMangagerCard"}
		>
			{(provided) => (
				<div
					ref={provided.innerRef}
					{...provided.dragHandleProps}
					{...provided.draggableProps}
					className="quizManager__detail__2__card"
				>
					<div className="quizManger__detail__2__card__times">
						<div>120s</div>
					</div>
					<div className="quizManager__detail__2__card__title">
						<div>
							<i>Minh Quang</i>
						</div>
						<div>
							<img
								src="https://inngochuong.com/uploads/images/mau-san-pham/mau-backgroud-dep-don-gian/them/backgroud-dep-phong-nen-mau-go-sang.jpg"
								alt="Ảnh"
							/>
						</div>
					</div>
					<div className="quizManager__detail__2__card__answer">
						<div className="quizManager__detail__2__card__answer__box">
							<div>
								<img
									src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiitGgmED2CQnBWs_Et0zaRusIMCYVx_9jeQ&usqp=CAU"
									alt="Anhr"
								/>
								<div>Minh</div>
							</div>
							<div
								title="Câu đúng"
								className="quizManager__detail__2__card__answer__box__abs"
							>
								<i className="fa-solid fa-check"></i>
							</div>
						</div>
						<div className="quizManager__detail__2__card__answer__box">
							<div>Minh</div>
						</div>
						<div className="quizManager__detail__2__card__answer__box">
							<div>Minh</div>
						</div>
						<div className="quizManager__detail__2__card__answer__box">
							<div>Minh</div>
						</div>
					</div>
					<div className="quizManger__detail__2__card__abs">{index}</div>
					<div className="question__edit">
						<div className="question__edit_btn">
							<button className="btn btn-default button__edit_second">
								Xóa
							</button>
							<button className="btn btn-default button__edit">Cập nhật</button>
						</div>
					</div>
				</div>
			)}
		</Draggable>
	);
};

export default QuizManagerCard;
