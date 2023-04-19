import React, { useRef, useState } from "react";
import "./style.scss";
type Props = {};

const QuizCreate: React.FC = (props: Props) => {
	const contentRef = useRef<HTMLDivElement>(null);
	const [content, setContent] = useState<string>("");

	const [image, setImage] = useState<string>("");
	const imageRef = useRef<File>();
	//question

	//end question
	const handleGetFile = (
		e: React.ChangeEvent<HTMLInputElement>,
		type: string
	): void => {
		if (e.target.files && e.target.files.length > 0) {
			const file = e.target?.files[0];
			const reader = new FileReader();
			reader.onload = (event) => {
				if (type === "quiz") {
					imageRef.current = file;
					if (event.target?.result) {
						setImage(event.target?.result?.toString());
					}
				}
			};
			reader.readAsDataURL(file);
		}
	};

	const handleDrop = (
		e: React.DragEvent<HTMLLabelElement>,
		type: string
	): void => {
		e.preventDefault();
		e.stopPropagation();
		const file = e.dataTransfer.files[0];
		const reader = new FileReader();

		reader.onload = (event) => {
			if (type === "quiz") {
				imageRef.current = file;
				if (event.target?.result) {
					setImage(event.target?.result?.toString());
				}
			}
		};

		reader.readAsDataURL(file);
	};
	const handleDragOver = (e: any): void => {
		e.preventDefault();
		e.stopPropagation();
	};

	const handleDragEnter = (e: any): void => {
		e.preventDefault();
		e.stopPropagation();
	};

	return (
		<div className="quizCreate">
			<div className="quizCreateForm">
				<div className="quizCreateForm__head">
					<div className="quizCreateForm__head__1">
						<div className="quizCraeteForm__head__1_img">
							<img src={image} alt="anh" />
							<div className="quizCraeteForm__head__1_items">
								<label
									onDrop={(e) => handleDrop(e, "quiz")}
									onDragOver={handleDragOver}
									onDragEnter={handleDragEnter}
									htmlFor="image"
									className={`${!image && "active"}`}
								>
									{!image && <i className="fa-regular fa-image"></i>}
									{!image && <i>Hình Ảnh</i>}
								</label>
								<input
									accept="image/*"
									onChange={(e) => handleGetFile(e, "quiz")}
									hidden
									id="image"
									type="file"
								/>
							</div>
						</div>
					</div>
					<div
						onClick={() => {
							contentRef.current?.focus();
						}}
						className="quizCreateForm__head__2"
					>
						<div
							onInput={(e) => {
								const value = e.target as HTMLElement;
								setContent(value.innerHTML);
							}}
							ref={contentRef}
							contentEditable={true}
						></div>
						{!content && (
							<div className="quizCreateForm__head__abs">
								Nhập câu hỏi ở đây...
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default QuizCreate;
