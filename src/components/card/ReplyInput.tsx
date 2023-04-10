import React, { useState, useRef, useContext } from "react";
import "./style.scss";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
import { TouchContext } from "../page/home/Home";
import { useLocation } from "react-router-dom";
interface props {
	touchCard: number;
	type: string;
	index: number;
	setType: React.Dispatch<React.SetStateAction<string>>;
	setTouchCard: React.Dispatch<React.SetStateAction<number>>;
}
const ReplyInput: React.FC<props> = ({
	setTouchCard,
	setType,
	touchCard,
	index,
	type,
}) => {
	const [comment, setComment] = useState<string>("");
	const contentRef = useRef<HTMLDivElement>(null);
	const { touch } = useContext(TouchContext);
	const { pathname } = useLocation();
	return (
		<div className="comment__reply">
			<div style={{ border: "0" }} className="newfeed__card__comment__form">
				<div className="newfeed__card__comment__form-img">
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
							setTouchCard(-1);
							setType("");
						}}
						ref={contentRef}
						className="newfeed__card__input_main"
						contentEditable={true}
					></div>
					<div
						onClick={() => {
							if (touchCard === index && type === "reply") {
								setTouchCard(-1);
								setType("");
							} else {
								setTouchCard(index);
								setType("reply");
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
					{pathname === "/" &&
						touch === "newfeeds" &&
						touchCard === index &&
						type === "reply" && (
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
					{pathname !== "/" && touchCard === index && type === "reply" && (
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
		</div>
	);
};

export default ReplyInput;
