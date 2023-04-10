import React, { useState } from "react";

const CommentTab: React.FC = () => {
	const [content, setContent] = useState<string>("");
	return (
		<div className="comment__tab__items">
			<div className="comment__tab__user"></div>
			<div className="comment__tab__content"></div>
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
