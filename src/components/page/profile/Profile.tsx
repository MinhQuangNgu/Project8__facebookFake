import React, { useEffect, useState } from "react";
import "./style.scss";
import { useLocation, useNavigate } from "react-router-dom";
import HomeProfile from "./page/HomeProfile";
import FriendProfile from "./page/FriendProfile";
import PhotoProfile from "./page/PhotoProfile";
import DrawProfile from "./page/DrawProfile";
import QuizProfile from "./page/QuizProfile";
import QuizHistoryProfile from "./page/QuizHistoryProfile";
type Props = {};

const Profile: React.FC = (props: Props) => {
	const navigate = useNavigate();
	const [param, setParam] = useState<string>("");
	const { search } = useLocation();
	useEffect(() => {
		const type = new URLSearchParams(search).get("type") || "";
		setParam(type);
	}, [search]);
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
						<div
							onClick={() => {
								navigate("?");
							}}
							className={`profile__user__navbar__items ${!param && "active"}`}
						>
							Bài viết
						</div>
						<div
							onClick={() => {
								navigate("?type=friends");
							}}
							className={`profile__user__navbar__items ${
								param === "friends" && "active"
							}`}
						>
							Bạn bè
						</div>
						<div
							onClick={() => {
								navigate("?type=photos");
							}}
							className={`profile__user__navbar__items ${
								param === "photos" && "active"
							}`}
						>
							Ảnh
						</div>
						<div
							onClick={() => {
								navigate("?type=draws");
							}}
							className={`profile__user__navbar__items ${
								param === "draws" && "active"
							}`}
						>
							Ảnh Vẽ
						</div>
						<div
							onClick={() => {
								navigate("?type=quizz");
							}}
							className={`profile__user__navbar__items ${
								param === "quizz" && "active"
							}`}
						>
							Quiz của bạn
						</div>
						<div
							onClick={() => {
								navigate("?type=historyQuiz");
							}}
							className={`profile__user__navbar__items ${
								param === "historyQuiz" && "active"
							}`}
						>
							Lịch sử làm Quiz
						</div>
					</div>
				</div>
			</div>
			{!param && <HomeProfile />}
			{param === "friends" && <FriendProfile />}
			{param === "photos" && <PhotoProfile />}
			{param === "draws" && <DrawProfile />}
			{param === "quizz" && <QuizProfile />}
			{param === "historyQuiz" && <QuizHistoryProfile />}
		</div>
	);
};

export default Profile;
