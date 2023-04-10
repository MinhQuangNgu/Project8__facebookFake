import React, { useState } from "react";
import "./style.scss";
import Hippo from "../../image/hippo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import CommentTab from "./CommentTab";
interface props {
	typeBig: "" | "messager";
	setTypeBig: React.Dispatch<React.SetStateAction<"" | "messager">>;
}
const Header: React.FC<props> = ({ typeBig, setTypeBig }) => {
	const navigate = useNavigate();
	const { pathname } = useLocation();
	const [type, setType] = useState<"" | "messager" | "notification">("");
	return (
		<div className="header padding">
			<div className="header__brand">
				<Link to="/">
					<div className="header__brand__wrap">
						<img src={Hippo} alt="Brand" />
					</div>
				</Link>
				<div className="header__search">
					<input type="text" placeholder="Tìm kiếm bạn bè" />
				</div>
			</div>
			<div className="header__navbar">
				<div
					onClick={() => {
						navigate("/");
					}}
					className={`header__navbar__items ${pathname === "/" && "active"}`}
				>
					<div>
						<i className="fa-solid fa-house"></i>
					</div>
				</div>
				<div
					onClick={() => {
						navigate("/friends");
					}}
					className={`header__navbar__items ${
						pathname === "/friends" && "active"
					}`}
				>
					<div>
						<i className="fa-solid fa-user-group"></i>
					</div>
				</div>
				<div
					onClick={() => {
						navigate("/watch");
					}}
					className={`header__navbar__items ${
						pathname === "/watch" && "active"
					}`}
				>
					<div>
						<i className="fa-solid fa-tv"></i>
					</div>
				</div>
				<div
					onClick={() => {
						navigate("/quiz");
					}}
					className={`header__navbar__items ${
						pathname === "/quiz" && "active"
					}`}
				>
					<div>
						<i className="fa-regular fa-circle-question"></i>
					</div>
				</div>
				<div
					onClick={() => {
						navigate("/draw");
					}}
					className={`header__navbar__items ${
						pathname === "/draw" && "active"
					}`}
				>
					<div>
						<i className="fa-solid fa-pen"></i>
					</div>
				</div>
			</div>
			<div className="header__infor">
				<div
					onClick={() => {
						setTypeBig("messager");
						if (type !== "messager") {
							setType("messager");
						} else {
							setType("");
						}
					}}
					style={
						typeBig && type === "messager"
							? {
									backgroundColor: "#56CCF2",
									color: "white",
							  }
							: {}
					}
					className="header__infor__items"
				>
					<i className="fa-solid fa-comment"></i>
				</div>
				<div
					onClick={() => {
						setTypeBig("messager");
						if (type !== "notification") {
							setType("notification");
						} else {
							setType("");
						}
					}}
					style={
						typeBig && type === "notification"
							? {
									backgroundColor: "#56CCF2",
									color: "white",
							  }
							: {}
					}
					className="header__infor__items"
				>
					<i className="fa-solid fa-bell"></i>
				</div>
				<div className="header__infor__items">
					<img src={Hippo} />
				</div>
				{typeBig && type && (
					<div className="message__container">
						<div className="message__wrap">
							<div className="message__header">
								<h1>{type === "messager" ? "Chat" : "Thông Báo"}</h1>
							</div>

							{type === "messager" && (
								<div className="message__body">
									<div className="message__body__items">
										<div className="message__body__items-img">
											<img
												src="https://treobangron.com.vn/wp-content/uploads/2022/09/background-dep-17.jpg"
												alt="Ảnh"
											/>
										</div>
										<div className="message__body__items-detail">
											<div className="message__body__items-detail-name">
												Minh Quang Minh Quang Minh Quang Minh Quang
											</div>
											<div className="message__body__items-detail-content">
												<div>Minh Quang hehe hehe hehe</div>{" "}
												<div>. 2 ngày trước</div>
											</div>
										</div>
									</div>
									<div className="message__body__items">
										<div className="message__body__items-img">
											<img
												src="https://treobangron.com.vn/wp-content/uploads/2022/09/background-dep-17.jpg"
												alt="Ảnh"
											/>
										</div>
										<div className="message__body__items-detail">
											<div className="message__body__items-detail-name">
												Minh Quang Minh Quang Minh Quang Minh Quang
											</div>
											<div className="message__body__items-detail-content">
												<div>Minh Quang hehe hehe hehe</div>{" "}
												<div>. 2 ngày trước</div>
											</div>
										</div>
									</div>
									<div className="message__body__items">
										<div className="message__body__items-img">
											<img
												src="https://treobangron.com.vn/wp-content/uploads/2022/09/background-dep-17.jpg"
												alt="Ảnh"
											/>
										</div>
										<div className="message__body__items-detail">
											<div className="message__body__items-detail-name">
												Minh Quang Minh Quang Minh Quang Minh Quang
											</div>
											<div className="message__body__items-detail-content">
												<div>Minh Quang hehe hehe hehe</div>{" "}
												<div>. 2 ngày trước</div>
											</div>
										</div>
									</div>
								</div>
							)}
						</div>
					</div>
				)}
			</div>
			<div className="comment__tab">
				<CommentTab />
			</div>
		</div>
	);
};

export default Header;
