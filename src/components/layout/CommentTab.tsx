import React, { useState } from "react";

const CommentTab: React.FC = () => {
	const [content, setContent] = useState<string>("");

	const [coversation, setConversation] = useState([
		{
			comment: "Hi Anh Quang",
			userid: "1",
		},
		{
			comment: "Hi Anh Quang",
			userid: "1",
		},
		{
			comment: "Hi Anh Minh dep Trai",
			userid: "2",
		},
		{
			comment: "Hi Anh Minh dep Trai",
			userid: "2",
		},
		{
			comment: "Hi Anh Minh dep Trai",
			userid: "2",
		},
	]);
	return (
		<div className="comment__tab__items">
			<div className="comment__tab__user">
				<div className="comment__tab__user__infor">
					<div className="comment__tab__image">
						<img
							src="https://kiemtientuweb.com/ckfinder/userfiles/images/background-dep/background-dep-23.jpg"
							alt="Ảnh"
						/>
					</div>
					<div className="comment__tab__name">Nguyen Minh Quang</div>
				</div>
				<div className="comment__tab__user__close">
					<div>&times;</div>
				</div>
			</div>
			<div className="comment__tab__content">
				{coversation?.map((item) => {
					if (item?.userid === "2") {
						return (
							<div className="comment__own">
								<div className="comment__bars">
									<div>
										<i className="fa-solid fa-trash"></i>
									</div>
								</div>
								<div className="comment__own__content">{item?.comment}</div>
							</div>
						);
					}
					return (
						<div className="comment__opposing">
							<div
								style={{ backgroundColor: "#E4E6EB", color: "black" }}
								className="comment__own__content"
							>
								{item?.comment}
							</div>
							<div className="comment__bars">
								<div>
									<i className="fa-solid fa-trash"></i>
								</div>
							</div>
						</div>
					);
				})}
			</div>
			<div className="comment__tab__write">
				<div>🙂</div>
				<div style={{ position: "relative" }}>
					<div
						onInput={(e) => {
							const value = e.target as HTMLElement;
							setContent(value.innerHTML);
						}}
						contentEditable={true}
					></div>
					{!content && <div className="comment__tab__abs">Bình luận...</div>}
				</div>
				<div>👍</div>
			</div>
		</div>
	);
};

export default CommentTab;
