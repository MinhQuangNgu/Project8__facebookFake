import React, { useRef, useState } from "react";
import "./style.scss";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
const Newfeeds: React.FC = () => {
	const [chat, setChat] = useState<string>("");
	const [emoji, setEmoji] = useState<boolean>(false);
	const contentRef = useRef<HTMLDivElement>(null);
	return (
		<div className="home__newfeeds">
			<div className="home__newfeeds__createOne">
				<div className="home__newfeed__head">
					<div className="home__newfeed__image">
						<img
							src="https://antimatter.vn/wp-content/uploads/2022/05/background-dep-1.jpg"
							alt="Ảnh"
						/>
					</div>
					<div className="home__newfeed__input">
						Quang ơi, bạn đang nghĩ gì?
					</div>
				</div>
				<div className="home__newfeed__body">
					<div className="home__newfeed__items">
						<i className="fa-solid fa-video"></i>
						Video trực tuyến
					</div>
					<div className="home__newfeed__items">
						<i style={{ color: "#45BD62" }} className="fa-solid fa-image"></i>
						Ảnh, video
					</div>
				</div>
			</div>
			<div className="newfeed-create">
				<div className="newfeed-create__wrap">
					<div className="newfeed-create__head">Tạo bài viết</div>
					<div className="newfeed-create__cancel">
						<div>&times;</div>
					</div>
					<div className="newfeed-create__input">
						<div
							onInput={(e) => {
								const value = e.target as HTMLElement;
								setChat(value.innerHTML);
							}}
							ref={contentRef}
							contentEditable={true}
						></div>
						<div>
							<i
								onClick={() => {
									setEmoji(!emoji);
								}}
								className="fa-regular fa-face-smile"
							></i>
						</div>
						{emoji && (
							<div className="picker">
								<Picker
									data={data}
									onEmojiSelect={(e: any) => {
										const content = contentRef.current;
										if (!content) {
											return;
										}
										content.innerHTML = chat + e?.native;
										setChat(content.innerHTML);
									}}
								/>
							</div>
						)}
						{!chat && (
							<div className="newfeed-create-msg">
								Quang ơi, bạn đang nghĩ gì thế?
							</div>
						)}
					</div>
				</div>
			</div>
			<div className="newfeed-create-abs"></div>
		</div>
	);
};

export default Newfeeds;
