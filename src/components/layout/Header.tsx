import React from "react";
import "./style.scss";
import Hippo from "../../image/hippo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
const Header: React.FC = () => {
	const navigate = useNavigate();
	const { pathname } = useLocation();
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
				<div className="header__infor__items">
					<i className="fa-solid fa-comment"></i>
				</div>
				<div className="header__infor__items">
					<i className="fa-solid fa-bell"></i>
				</div>
				<div className="header__infor__items">
					<img src={Hippo} />
				</div>
			</div>
		</div>
	);
};

export default Header;
