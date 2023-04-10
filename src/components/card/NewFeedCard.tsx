import React, { useState, useRef, useContext } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import CommentCard from "./CommentCard";
import { TouchContext } from "../page/home/Home";
interface props {
	touchCard: number;
	setTouchCard: React.Dispatch<React.SetStateAction<number>>;
	index: number;
}
const NewFeedCard: React.FC<props> = ({ touchCard, setTouchCard, index }) => {
	const [react, setReact] = useState<string>("");
	const [comment, setComment] = useState<string>("");
	const { touch } = useContext(TouchContext);
	const [type, setType] = useState<string>("");
	const contentRef = useRef<HTMLDivElement>(null);
	return (
		<div className="newfeed__card">
			<div
				onClick={() => {
					setTouchCard(-1);
				}}
				className="newfeed__card__head"
			>
				<div className="newfeed__card__wrap">
					<div className="newfeed__card__image">
						<img
							src="https://antimatter.vn/wp-content/uploads/2022/05/background-dep-1.jpg"
							alt="Ảnh"
						/>
					</div>
					<div className="newfeed__card__name">
						<Link className="Link" to="/">
							<div className="newfeed__card__name_infor">Minh Quang Nguyen</div>
						</Link>
						<div>20 phút</div>
					</div>
				</div>
				<div className="newfeed__card__close">
					<div>&times;</div>
				</div>
			</div>
			<div
				onClick={() => {
					setTouchCard(-1);
				}}
				className="newfeed__card__body"
			>
				<div className="newfeed__card__body__content">
					Một mình anh chấp hết :))
				</div>
				<div className="newfeed__card__body__img">
					<img
						src="https://vapa.vn/wp-content/uploads/2022/12/anh-background-001-1.jpg"
						alt="Ảnh"
					/>
				</div>
			</div>
			<div
				onClick={() => {
					setTouchCard(-1);
				}}
				className="newfeed__card__react"
			>
				<div style={{ display: "flex", alignItems: "center" }}>
					😁👍
					<div className="newfeed_react">20k</div>
				</div>
				<div className="newfeed__card__comment">
					<div>322 bình luận</div>
				</div>
			</div>
			<div
				onClick={() => {
					setTouchCard(-1);
				}}
				className="newfeed__card__comment__wrap"
			>
				<div
					style={
						react
							? {
									color: "#F8B93A",
							  }
							: {}
					}
					className="newfeed__card__comment__wrap__items"
				>
					{!react && (
						<i
							style={{ marginRight: "0.5rem" }}
							className="fa-regular fa-thumbs-up"
						></i>
					)}
					{!react && "Thích"}
					{react}
					<div className="newfeed__card__comment__react">
						<div
							onClick={() => {
								if (react !== "👍 Thích") {
									setReact("👍 Thích");
								}
							}}
						>
							👍
						</div>
						<div
							onClick={() => {
								if (react !== "😁 Hài hước") {
									setReact("😁 Hài hước");
								}
							}}
						>
							😁
						</div>
						<div
							onClick={() => {
								if (react !== "😍 Yêu thích") {
									setReact("😍 Yêu thích");
								}
							}}
						>
							😍
						</div>
						<div
							onClick={() => {
								if (react !== "🥲 Buồn") {
									setReact("🥲 Buồn");
								}
							}}
						>
							🥲
						</div>
						<div
							onClick={() => {
								if (react !== "😜 Cười ngượng") {
									setReact("😜 Cười ngượng");
								}
							}}
						>
							😜
						</div>
						<div
							onClick={() => {
								if (react !== "🤪 Cười ngốc") {
									setReact("🤪 Cười ngốc");
								}
							}}
						>
							🤪
						</div>
					</div>
					<div
						onClick={() => {
							if (!react) {
								setReact("👍 Thích");
							} else {
								setReact("");
							}
						}}
						className="newfeed__card__button"
					></div>
				</div>
				<div
					onClick={() => {
						setTouchCard(-1);
					}}
					className="newfeed__card__comment__wrap__items"
				>
					<i
						style={{ marginRight: "0.5rem" }}
						className="fa-regular fa-comment"
					></i>{" "}
					Bình luận
				</div>
			</div>
			<div className="newfeed__card__comment__form">
				<div
					onClick={() => {
						setTouchCard(-1);
					}}
					className="newfeed__card__comment__form-img"
				>
					<img
						src="https://treobangron.com.vn/wp-content/uploads/2022/09/background-dep-4-2.jpg"
						alt="Ảnh"
					/>
				</div>
				<div className="newfeed__card__comment__form-input">
					<div
						onInput={(e) => {
							const value = e.target as HTMLElement;
							setComment(value.innerHTML);
						}}
						onClick={() => {
							setTouchCard(-1);
						}}
						ref={contentRef}
						className="newfeed__card__input_main"
						contentEditable={true}
					></div>
					<div
						onClick={() => {
							if (touchCard === index && type === "emoji") {
								setTouchCard(-1);
								setType("");
							} else {
								setTouchCard(index);
								setType("emoji");
							}
						}}
						className="newfeed__add__icons"
					>
						🙂
					</div>
					<div className="newfeed__more"></div>
					{!comment && (
						<div className="newfeed__more__abs">Viết bình luận...</div>
					)}
					{touch === "newfeeds" && type === "emoji" && touchCard === index && (
						<div className="picker__newfeed">
							<Picker
								data={data}
								onEmojiSelect={(e: any) => {
									const content = contentRef.current;
									if (!content) {
										return;
									}
									content.innerHTML = comment + e?.native;
									setComment(content.innerHTML);
								}}
							/>
						</div>
					)}
				</div>
			</div>
			<div className="newfeed__comment__card">
				<CommentCard
					touchCard={touchCard}
					setTouchCard={setTouchCard}
					index={0}
					type={type}
					setType={setType}
				/>
				<CommentCard
					touchCard={touchCard}
					setTouchCard={setTouchCard}
					index={1}
					type={type}
					setType={setType}
				/>
			</div>
		</div>
	);
};

export default NewFeedCard;
