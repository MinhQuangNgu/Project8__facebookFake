import React, { useState, useContext } from "react";
import "./style.scss";
import CreateNewFeed from "../common/CreateNewFeed";
import NewFeedCard from "../../card/NewFeedCard";
import { TouchContext } from "./Home";
const Newfeeds: React.FC = () => {
	const [createNewFeed, setCreateNewFeed] = useState<boolean>(false);
	const { setTouch } = useContext(TouchContext);
	const [touchCard, setTouchCard] = useState<number>(-1);
	return (
		<div
			onClick={() => {
				if (setTouch) {
					setTouch("newfeeds");
				}
			}}
			className="home__newfeeds"
		>
			<div
				onClick={() => {
					setTouchCard(-1);
				}}
				className="home__newfeeds__createOne"
			>
				<div className="home__newfeed__head">
					<div className="home__newfeed__image">
						<img
							src="https://antimatter.vn/wp-content/uploads/2022/05/background-dep-1.jpg"
							alt="Ảnh"
						/>
					</div>
					<div
						onClick={() => {
							setCreateNewFeed(true);
						}}
						className="home__newfeed__input"
					>
						Quang ơi, bạn đang nghĩ gì?
					</div>
				</div>
				<div className="home__newfeed__body">
					<div className="home__newfeed__items">
						<i className="fa-solid fa-video"></i>
						Video trực tuyến
					</div>
					<div
						onClick={() => {
							setCreateNewFeed(true);
						}}
						className="home__newfeed__items"
					>
						<i style={{ color: "#45BD62" }} className="fa-solid fa-image"></i>
						Ảnh, video
					</div>
				</div>
			</div>
			{createNewFeed && <CreateNewFeed setCreateNewFeed={setCreateNewFeed} />}
			{createNewFeed && (
				<div
					onClick={() => {
						setCreateNewFeed(false);
					}}
					className="newfeed-create-abs"
				></div>
			)}
			<NewFeedCard
				index={0}
				touchCard={touchCard}
				setTouchCard={setTouchCard}
			/>
			<NewFeedCard
				index={1}
				touchCard={touchCard}
				setTouchCard={setTouchCard}
			/>
		</div>
	);
};

export default Newfeeds;
