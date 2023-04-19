import React from "react";
import { useRef, useState } from "react";
interface answers {
	image?: string;
	content?: string;
}
type Props = {
	item: answers;
	answer: answers[];
	setAnswer: React.Dispatch<React.SetStateAction<answers[]>>;
	index: number;
};

const QuizAnswerManager: React.FC<Props> = ({
	item,
	answer,
	setAnswer,
	index,
}) => {
	const contentAnswerRef = useRef<HTMLDivElement>(null);
	const [content, setContent] = useState<string>("");
	return (
		<div className="quizCreateForm__head__3__items">
			<div className="quizCreateForm__head__3__items_wrap">
				<div className="quizCreateForm3___head">
					<div title="Xóa phương án" className="quizCreateForm3__head__items">
						<i className="fa-solid fa-trash"></i>
					</div>
					<div title="Thêm ảnh" className="quizCreateForm3__head__items">
						<i className="fa-solid fa-image"></i>
					</div>
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
