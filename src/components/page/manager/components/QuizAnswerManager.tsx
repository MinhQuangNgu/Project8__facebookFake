import React from "react";
import { useRef, useState, useEffect } from "react";
interface answers {
	image?: File;
	content?: string;
	url?: string;
}
type Props = {
	item: answers;
	index: number;
	handleChangeContentAnswer: (content: string, index: number) => void;
	handleRemoveContentAnswer: (index: number) => void;
	setImageAddNumber: React.Dispatch<React.SetStateAction<number>>;
	setImageShow: React.Dispatch<React.SetStateAction<string>>;
};

const QuizAnswerManager: React.FC<Props> = ({
	item,
	index,
	handleChangeContentAnswer,
	handleRemoveContentAnswer,
	setImageAddNumber,
	setImageShow,
}) => {
	const contentAnswerRef = useRef<HTMLDivElement>(null);
	const [content, setContent] = useState<string>("");
	useEffect(() => {
		if (contentAnswerRef.current && item?.content) {
			contentAnswerRef.current.innerHTML = item?.content;
			setContent(item?.content);
		}
	}, [item]);
	return (
		<div className="quizCreateForm__head__3__items">
			<div className="quizCreateForm__head__3__items_wrap">
				<div className="quizCreateForm3___head">
					<div
						onClick={() => {
							handleRemoveContentAnswer(index);
						}}
						title="Xóa phương án"
						className="quizCreateForm3__head__items"
					>
						<i className="fa-solid fa-trash"></i>
					</div>
					<div
						onClick={() => {
							setImageAddNumber(index);
						}}
						title="Thêm ảnh"
						className="quizCreateForm3__head__items"
					>
						<i className="fa-solid fa-image"></i>
					</div>
					{item?.url && (
						<div
							onClick={() => {
								setImageShow(item?.url || "");
							}}
							className="quizCreateForm3__head__items"
						>
							<img src={item?.url} alt="anh" />
						</div>
					)}
				</div>
				<div
					onClick={() => {
						contentAnswerRef.current?.focus();
					}}
					className="quizCreateForm3__body"
				>
					<div
						onInput={(e) => {
							const value = e.target as HTMLElement;
							setContent(value.innerHTML);
							handleChangeContentAnswer(value.innerHTML, index);
						}}
						ref={contentAnswerRef}
						tabIndex={1}
						className="quizCraeteForm3__input"
						contentEditable={true}
					></div>
					{!content && (
						<div className="quizCreateForm3__abs">
							Thêm câu trả lời tại đây...
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default QuizAnswerManager;
