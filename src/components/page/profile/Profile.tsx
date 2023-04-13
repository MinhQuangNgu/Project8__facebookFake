import React, { useState } from "react";
import "./style.scss";
import NewFeedCard from "../../card/NewFeedCard";
type Props = {};

const Profile: React.FC = (props: Props) => {
	const [touchCard, setTouchCard] = useState<number>(-1);
	return (
		<div className="profile">
			<div className="profile__wrap">
				<div>
					<div className="profile__cover__image">
						<img
							src="https://img6.thuthuatphanmem.vn/uploads/2022/02/25/background-nhe-nhang-tuyet-dep_082543688.jpg"
							alt="Ảnh"
						/>
						<div className="profile__cover__image__add">
							<label htmlFor="addCoverImage">
								<i className="fa-solid fa-camera"></i> Thêm ảnh bìa
							</label>
							<input id="addCoverImage" type="file" hidden />
						</div>
					</div>
					<div className="padding__profile profile__userInfor">
						<div className="profile__userInfor__1">
							<div className="profile__userInfor__1_img">
								<img
									src="https://kiemtientuweb.com/ckfinder/userfiles/images/background-dep/background-dep-23.jpg"
									alt="Ảnh"
								/>
							</div>
							<div className="profile__userInfor__1_name">
								<div>Minh Quang</div>
								<div>52 bạn bè</div>
								<div style={{ display: "flex" }}>
									<div className="profile__userInfor__1_name-items">
										<img
											src="https://thaihoanghd.com/wp-content/uploads/2021/07/lightbulb-illuminating-floor-background.jpg"
											alt="Anh"
										/>
									</div>
									<div className="profile__userInfor__1_name-items">
										<img
											src="https://thaihoanghd.com/wp-content/uploads/2021/07/lightbulb-illuminating-floor-background.jpg"
											alt="Anh"
										/>
									</div>
									<div className="profile__userInfor__1_name-items">
										<img
											src="https://thaihoanghd.com/wp-content/uploads/2021/07/lightbulb-illuminating-floor-background.jpg"
											alt="Anh"
										/>
									</div>
									<div className="profile__userInfor__1_name-items">
										<img
											src="https://thaihoanghd.com/wp-content/uploads/2021/07/lightbulb-illuminating-floor-background.jpg"
											alt="Anh"
										/>
									</div>
									<div className="profile__userInfor__1_name-items">
										<img
											src="https://thaihoanghd.com/wp-content/uploads/2021/07/lightbulb-illuminating-floor-background.jpg"
											alt="Anh"
										/>
									</div>
								</div>
							</div>
						</div>
						<div className="profile__userInfor__2">
							<div className="profile__userInfor__2_edit">
								<i
									style={{ marginRight: "0.8rem" }}
									className="fa-solid fa-pencil"
								></i>
								Chỉnh sửa trang cá nhân
							</div>
						</div>
					</div>
					<div className="padding__profile profile__user__navbar">
						<div className="profile__user__navbar__items active">Bài viết</div>
						<div className="profile__user__navbar__items">Bạn bè</div>
					</div>
				</div>
			</div>
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
		</div>
	);
};

export default Profile;
