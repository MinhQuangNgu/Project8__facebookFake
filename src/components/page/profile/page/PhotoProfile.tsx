import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const PhotoProfile: React.FC = (props: Props) => {
	return (
		<div className="padding__profile border__shadow friendProfile">
			<div className="friendsNavbar">
				<div className="__title">Ảnh</div>
			</div>
			<div className="photoProfile__wrap">
				<div className="phtoProfile__items">
					<div className="phtoProfile__items__detail">
						<img
							src="https://inngochuong.com/uploads/images/mau-san-pham/mau-backgroud-dep-don-gian/background-dep-nhat.jpg"
							alt="Anh"
						/>
					</div>
				</div>
				<div className="phtoProfile__items">
					<div className="phtoProfile__items__detail">
						<img
							src="https://inngochuong.com/uploads/images/mau-san-pham/mau-backgroud-dep-don-gian/background-dep-nhat.jpg"
							alt="Anh"
						/>
					</div>
				</div>
				<div className="phtoProfile__items">
					<div className="phtoProfile__items__detail">
						<img
							src="https://inngochuong.com/uploads/images/mau-san-pham/mau-backgroud-dep-don-gian/background-dep-nhat.jpg"
							alt="Anh"
						/>
					</div>
				</div>
				<div className="phtoProfile__items">
					<div className="phtoProfile__items__detail">
						<img
							src="https://inngochuong.com/uploads/images/mau-san-pham/mau-backgroud-dep-don-gian/background-dep-nhat.jpg"
							alt="Anh"
						/>
					</div>
				</div>
				<div className="phtoProfile__items">
					<div className="phtoProfile__items__detail">
						<img
							src="https://inngochuong.com/uploads/images/mau-san-pham/mau-backgroud-dep-don-gian/background-dep-nhat.jpg"
							alt="Anh"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PhotoProfile;
