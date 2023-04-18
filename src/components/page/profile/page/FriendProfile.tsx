import React, { useState } from "react";
import { Link } from "react-router-dom";

type Props = {};

const FriendProfile: React.FC = (props: Props) => {
	const [friend, setFriend] = useState<number>(-1);
	return (
		<div className="padding__profile border__shadow friendProfile">
			<div className="friendsNavbar">
				<div className="__title">Bạn bè</div>
				<div className="friendsNavbar__items">
					<input type="text" placeholder="Tìm kiếm" />
					<Link className="__link" to="/friends">
						Lời mời kết bạn
					</Link>
				</div>
			</div>
			<div className="friendProfile__wrap">
				<div className="friendProfile__items">
					<div className="friendProfile__item__1">
						<div className="friendProfile__item__1_img">
							<img
								src="https://i.pinimg.com/736x/2f/60/6a/2f606ad14bf9171e5f41b42a01b4441f.jpg"
								alt="Ảnh"
							/>
						</div>
						<div className="friendProfile__item__1_name">
							<div>
								<Link className="__link _link_name" to="/">
									Minh Quang
								</Link>
							</div>
							<div>12 bạn chung</div>
						</div>
					</div>
					<div className="friendProfile__item__2">
						<div
							onClick={() => {
								setFriend((prev) => prev + 1);
							}}
						>
							<i className="fa-solid fa-ellipsis"></i>
						</div>
						{friend === 1 && (
							<div className="friendProfile__item__2_abs">
								<div className="friendProfile__item__2_abs-items">
									Bỏ theo dõi
								</div>
								<div className="friendProfile__item__2_abs-items">
									Hủy kết bạn
								</div>
							</div>
						)}
						{friend === 1 && (
							<div className="friendProfile__item__2_abs_2"></div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default FriendProfile;
