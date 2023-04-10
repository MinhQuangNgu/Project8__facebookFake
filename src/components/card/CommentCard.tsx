import React from "react";
import "./style.scss";
const CommentCard: React.FC = () => {
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
					<div className="commentCard__bars">
						<i className="fa-solid fa-ellipsis"></i>
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
