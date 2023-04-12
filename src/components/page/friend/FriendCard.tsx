import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
const FriendCard: React.FC = () => {
	return (
		<div className="friendCard">
			<div className="friendCard__wrap">
				<Link to="/">
					<div className="friendCard__image">
						<img
							src="https://treobangron.com.vn/wp-content/uploads/2022/09/background-dep-3-2.jpg"
							alt="Ảnh"
						/>
					</div>
				</Link>
				<div className="friendCard__button">
					<button>Thêm bạn bè</button>
				</div>
			</div>
		</div>
	);
};

export default FriendCard;
