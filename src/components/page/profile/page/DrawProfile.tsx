import React from "react";
import "../style.scss";
type Props = {};

const DrawProfile = (props: Props) => {
	return (
		<div className="padding__profile border__shadow friendProfile">
			<div className="friendsNavbar">
				<div className="__title">Ảnh Vẽ</div>
			</div>
			<div className="photoProfile__wrap">
				<div className="phtoProfile__items">
					<div className="phtoProfile__items__detail">
						<img
							src="https://haycafe.vn/wp-content/uploads/2022/07/background-dep-cho-zoom.jpg"
							alt="Anh"
						/>
						<div className="draw__items__love">
							💞 <i>120k</i>
						</div>
						<div className="photoProflie__items_abs">
							<button>Xóa</button>
						</div>
					</div>
				</div>
				<div className="phtoProfile__items">
					<div className="phtoProfile__items__detail">
						<img
							src="https://inngochuong.com/uploads/images/mau-san-pham/mau-backgroud-dep-don-gian/background-dep-nhat.jpg"
							alt="Anh"
						/>
						<div className="draw__items__love">
							💞 <i>120k</i>
						</div>
					</div>
				</div>
				<div className="phtoProfile__items">
					<div className="phtoProfile__items__detail">
						<img
							src="https://inngochuong.com/uploads/images/mau-san-pham/mau-backgroud-dep-don-gian/background-dep-nhat.jpg"
							alt="Anh"
						/>
						<div className="draw__items__love">
							💞 <i>120k</i>
						</div>
					</div>
				</div>
				<div className="phtoProfile__items">
					<div className="phtoProfile__items__detail">
						<img
							src="https://inngochuong.com/uploads/images/mau-san-pham/mau-backgroud-dep-don-gian/background-dep-nhat.jpg"
							alt="Anh"
						/>
						<div className="draw__items__love">
							💞 <i>120k</i>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default DrawProfile;
