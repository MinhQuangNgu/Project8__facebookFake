import React, { useContext } from "react";
import "./style.scss";
import { TouchContext } from "../page/home/Home";
interface props {
	type: string;
	index: number;
	setType: React.Dispatch<React.SetStateAction<string>>;
	touchCard: number;
	setTouchCard: React.Dispatch<React.SetStateAction<number>>;
}
const CommentCard: React.FC<props> = ({
	type,
	setType,
	index,
	touchCard,
	setTouchCard,
}) => {
	const { touch } = useContext(TouchContext);
	return (
		<div className="commentCard">
			<div className="commentCard__avatar">
				<img
					src="https://antimatter.vn/wp-content/uploads/2022/05/background-dep-1.jpg"
					alt="Ảnh"
				/>
			</div>
			<div className="commentCard__body">
				<div className="commentCard__content_wrap">
					<div className="commentCard__content">
						<div>Minh Quang</div>
						<div>Thô nhưng thật</div>
					</div>
					<div style={{ position: "relative" }}>
						<div
							onClick={() => {
								if (touchCard === index && type === "comment") {
									setTouchCard(-1);
									setType("");
								} else {
									setTouchCard(index);
									setType("comment");
								}
							}}
							className="commentCard__bars"
						>
							<i className="fa-solid fa-ellipsis"></i>
						</div>
						{touch === "newfeeds" &&
							type === "comment" &&
							touchCard === index && (
								<div className="commentCard__bars__wrap">
									<div className="commentCard__bars__items">Xóa</div>
									<div className="commentCard__bars__items">Cập nhật</div>
								</div>
							)}
					</div>
				</div>
				<div className="commentCared__button">
					<div>Thích</div>
					<div>Phản hồi</div>
					<div>12 phút trước</div>
				</div>
			</div>
		</div>
	);
};

export default CommentCard;
