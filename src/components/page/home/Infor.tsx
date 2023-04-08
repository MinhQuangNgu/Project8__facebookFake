import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import ChatWorld from "./ChatWorld";
const Infor: React.FC = () => {
	return (
		<div className="header__brand">
			<div className="home__infor">
				<div className="home__infor__wrap">
					<Link className="Link" to="/">
						<div className="home__infor__items">
							<div className="home__infor__items__image">
								<img
									src="https://antimatter.vn/wp-content/uploads/2022/05/background-dep-1.jpg"
									alt="Anh"
								/>
							</div>
							<div className="home__infor__items__name">Minh Quang</div>
						</div>
					</Link>
					<Link className="Link" to="/">
						<div className="home__infor__items">
							<div className="home__infor__items__image">
								<i className="fa-solid fa-user-group"></i>
							</div>
							<div className="home__infor__items__name">Tìm bạn bè</div>
						</div>
					</Link>
					<Link className="Link" to="/">
						<div className="home__infor__items">
							<div className="home__infor__items__image">
								<i className="fa-solid fa-tv"></i>
							</div>
							<div className="home__infor__items__name">Watch</div>
						</div>
					</Link>
					<Link className="Link" to="/">
						<div className="home__infor__items">
							<div className="home__infor__items__image">
								<i className="fa-solid fa-question"></i>
							</div>
							<div className="home__infor__items__name">Làm quizz</div>
						</div>
					</Link>
					<Link className="Link" to="/">
						<div
							style={{ marginBottom: "1rem" }}
							className="home__infor__items"
						>
							<div className="home__infor__items__image">
								<i className="fa-solid fa-pen"></i>
							</div>
							<div className="home__infor__items__name">Vẽ</div>
						</div>
					</Link>
					<ChatWorld />
				</div>
			</div>
		</div>
	);
};

export default Infor;
