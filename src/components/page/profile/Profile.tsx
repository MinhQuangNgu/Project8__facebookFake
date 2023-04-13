import React from "react";
import "./style.scss";
type Props = {};

const Profile: React.FC = (props: Props) => {
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
		</div>
	);
};

export default Profile;
