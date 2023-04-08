import React, { useRef, useState } from "react";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

interface props {
	setCreateNewFeed: React.Dispatch<React.SetStateAction<boolean>>;
}
const CreateNewFeed: React.FC<props> = ({ setCreateNewFeed }) => {
	const [chat, setChat] = useState<string>("");
	const [emoji, setEmoji] = useState<boolean>(false);
	const contentRef = useRef<HTMLDivElement>(null);
	return (
		<div className="newfeed-create">
			<div className="newfeed-create__wrap">
				<div className="newfeed-create__head">Tạo bài viết</div>
				<div className="newfeed-create__cancel">
					<div
						onClick={() => {
							setCreateNewFeed(false);
						}}
					>
						&times;
					</div>
				</div>
				<div className="newfeed-create__detail">
					<div className="newfeed-create__input">
						<div
							onInput={(e) => {
								const value = e.target as HTMLElement;
								setChat(value.innerHTML);
							}}
							onClick={() => {
								setEmoji(false);
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
						{!chat && (
							<div className="newfeed-create-msg">
								Quang ơi, bạn đang nghĩ gì thế?
							</div>
						)}
					</div>
					<div className="newfeed-create__imgVideo">
						<div>
							<input hidden id="newFeed" name="feed" type="file" />
							<label htmlFor="newFeed">
								<div>
									<i className="fa-regular fa-square-plus"></i>
								</div>
								<div>Thêm ảnh/video</div>
							</label>
						</div>
					</div>
				</div>
				<div className="newfeed-create__button">
					<button>Đăng</button>
				</div>
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
		</div>
	);
};

export default CreateNewFeed;
