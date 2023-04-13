import React, { useState, useEffect } from "react";
import NewFeedCard from "../../../card/NewFeedCard";
import { useLocation } from "react-router-dom";

type Props = {};

const HomeProfile: React.FC = (props: Props) => {
	const [touchCard, setTouchCard] = useState<number>(-1);

	return (
		<div className="padding__profile profile__detail">
			<div className="profile__detail__1">
				<div className="border__shadow profile__detail__1__introduction">
					<div className="__title">Giới thiệu</div>
					<div className="__description">Anh quang ơi đẹp tria quá</div>
					<div className="__button">
						<button>Chỉnh sửa giới thiệu</button>
					</div>
				</div>
				<div className="border__shadow profile__detail__1__introduction">
					<div className="__title">Ảnh</div>
					<div className="__image__wrap">
						<img
							className="__img"
							src="https://treobangron.com.vn/wp-content/uploads/2022/09/background-dep-17.jpg"
							alt="Ảnh"
						/>
						<img
							className="__img"
							src="https://treobangron.com.vn/wp-content/uploads/2022/09/background-dep-17.jpg"
							alt="Ảnh"
						/>
						<img
							className="__img"
							src="https://treobangron.com.vn/wp-content/uploads/2022/09/background-dep-17.jpg"
							alt="Ảnh"
						/>
						<img
							className="__img"
							src="https://treobangron.com.vn/wp-content/uploads/2022/09/background-dep-17.jpg"
							alt="Ảnh"
						/>
					</div>
					<div className="__button">
						<button>Xem tất cả</button>
					</div>
				</div>
				<div className="border__shadow profile__detail__1__introduction sticky">
					<div className="__title">Bạn bè</div>
					<div className="__image__wrap">
						<div className="__image__card">
							<img
								src="https://treobangron.com.vn/wp-content/uploads/2022/09/background-dep-17.jpg"
								alt="Ảnh"
							/>
							<div> Minh Quang</div>
						</div>
						<div className="__image__card">
							<img
								src="https://treobangron.com.vn/wp-content/uploads/2022/09/background-dep-17.jpg"
								alt="Ảnh"
							/>
							<div>Minh Quang</div>
						</div>
						<div className="__image__card">
							<img
								src="https://treobangron.com.vn/wp-content/uploads/2022/09/background-dep-17.jpg"
								alt="Ảnh"
							/>
							<div> Minh Quang</div>
						</div>
						<div className="__image__card">
							<img
								src="https://treobangron.com.vn/wp-content/uploads/2022/09/background-dep-17.jpg"
								alt="Ảnh"
							/>
							<div>Nguyen Minh Quang</div>
						</div>
						<div className="__image__card">
							<img
								src="https://treobangron.com.vn/wp-content/uploads/2022/09/background-dep-17.jpg"
								alt="Ảnh"
							/>
							<div>Nguyen Minh Quang</div>
						</div>
						<div className="__image__card">
							<img
								src="https://treobangron.com.vn/wp-content/uploads/2022/09/background-dep-17.jpg"
								alt="Ảnh"
							/>
							<div>Nguyen Minh Quang</div>
						</div>
						<div className="__image__card">
							<img
								src="https://treobangron.com.vn/wp-content/uploads/2022/09/background-dep-17.jpg"
								alt="Ảnh"
							/>
							<div>Minh Quang</div>
						</div>

						<div className="__image__card">
							<img
								src="https://treobangron.com.vn/wp-content/uploads/2022/09/background-dep-17.jpg"
								alt="Ảnh"
							/>
							<div>Nguyen Minh Quang</div>
						</div>
						<div className="__image__card">
							<img
								src="https://treobangron.com.vn/wp-content/uploads/2022/09/background-dep-17.jpg"
								alt="Ảnh"
							/>
							<div>Nguyen Minh Quang</div>
						</div>
					</div>
					<div className="__button">
						<button>Xem tất cả</button>
					</div>
				</div>
			</div>
			<div className="profile__detail__2">
				<NewFeedCard
					index={0}
					touchCard={touchCard}
					setTouchCard={setTouchCard}
				/>
				<NewFeedCard
					index={2}
					touchCard={touchCard}
					setTouchCard={setTouchCard}
				/>
				<NewFeedCard
					index={3}
					touchCard={touchCard}
					setTouchCard={setTouchCard}
				/>
			</div>
		</div>
	);
};

export default HomeProfile;
