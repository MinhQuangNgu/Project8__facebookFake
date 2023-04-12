import React, { useState, useRef } from "react";
import "./style.scss";
import DrawCard from "./DrawCard";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import CommentCard from "../../card/CommentCard";
const Draw: React.FC = () => {
	const [item, setItem] = useState(false);
	const [touchCard, setTouchCard] = useState(-1);
	const [comment, setComment] = useState<string>("");
	const [type, setType] = useState<string>("");
	const contentRef = useRef<HTMLDivElement>(null);
	return (
		<div className="draw">
			<div className="draw__wrap">
				<div>
					<DrawCard />
					<DrawCard />
					<DrawCard />
				</div>
			</div>
			{!item && (
				<div className="draw__viewAll">
					<div className="draw__viewAll__a">
						<div className="draw__viewAll__image">
							<img
								src="https://anhcuoiviet.vn/wp-content/uploads/2022/11/background-dep-0.jpg"
								alt="Ảnh"
							/>
						</div>
						<div className="draw__viewAll__comment">
							<div
								style={{ border: "none" }}
								className="newfeed__card__comment__form"
							>
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
											setType("");
										}}
										ref={contentRef}
										className="newfeed__card__input_main"
										contentEditable={true}
									></div>
									<div
										onClick={() => {
											if (type !== "emoji") {
												setType("emoji");
											} else {
												setType("");
											}
										}}
										className="newfeed__add__icons"
									>
										🙂
									</div>
									{!comment && (
										<div className="newfeed__more__abs">Viết bình luận...</div>
									)}
									{type === "emoji" && (
										<div style={{ right: "0%" }} className="picker__newfeed">
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
							<div className="draw__viewAll__Comment__items">
								<CommentCard
									touchCard={touchCard}
									setTouchCard={setTouchCard}
									index={0}
									type={type}
									setType={setType}
								/>
							</div>
						</div>
					</div>
				</div>
			)}
			{!item && (
				<div
					onClick={() => {
						setItem(false);
					}}
					className="draw__viewAll__abs"
				></div>
			)}
		</div>
	);
};

export default Draw;
