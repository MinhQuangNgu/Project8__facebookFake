import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const PhotoProfile: React.FC = (props: Props) => {
	return (
		<div className="padding__profile border__shadow friendProfile">
			<div className="friendsNavbar">
				<div className="__title">Bạn bè</div>
				<div className="friendsNavbar__items">
					<input type="text" placeholder="Tìm kiếm" />
					<Link className="__link" to="/">
						Lời mời kết bạn
					</Link>
				</div>
			</div>
		</div>
	);
};

export default PhotoProfile;
