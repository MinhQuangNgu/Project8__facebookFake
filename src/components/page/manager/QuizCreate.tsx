import React, { useRef, useState, useCallback, useEffect } from "react";
import "./style.scss";
import QuizAnswerManager from "./components/QuizAnswerManager";
type Props = {};
interface answers {
	image?: File;
	content?: string;
	url?: string;
}
const QuizCreate: React.FC = (props: Props) => {
	//question
	const contentRef = useRef<HTMLDivElement>(null);
	const [content, setContent] = useState<string>("");
	const [image, setImage] = useState<string>("");
	const imageRef = useRef<File>();
	//end question

	//answer
	const [answer, setAnswer] = useState<answers[]>([{}, {}, {}, {}]);
	const [imageAddNumber, setImageAddNumber] = useState<number>(-1);
	const [imageShow, setImageShow] = useState<string>("");
	//end answer
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
				} else if (type === "question") {
					const arr = answer;
					arr[imageAddNumber] = {
						...arr[imageAddNumber],
						image: file,
						url: event.target?.result?.toString(),
					};
					setAnswer([...arr]);
					setImageAddNumber(-1);
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
			} else if (type === "question") {
				const arr = answer;
				arr[imageAddNumber] = {
					...arr[imageAddNumber],
					image: file,
					url: event.target?.result?.toString(),
				};
				setAnswer([...arr]);
				setImageAddNumber(-1);
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
	const [update, setUpdate] = useState<boolean>(false);
	const handleChangeContentAnswer = useCallback(
		(content: string, index: number) => {
			const ans = answer;
			ans[index].content = content;
			setAnswer(ans);
			setUpdate(!update);
		},
		[update]
	);
	const handleRemoveContentAnswer = useCallback(
		(index: number) => {
			const ans = answer;
			if (ans.length <= 2) {
				window.alert("Cần ít nhất 2 đáp án.");
				return;
			}
			ans.splice(index, 1);
			setAnswer([...ans]);
			setUpdate(!update);
		},
		[update]
	);

	const handleAddAnswer = () => {
		if (answer?.length === 5) {
			return;
		}
		setAnswer([...answer, {}]);
		setUpdate(!update);
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
									{image && (
										<div className="quizCreateForm__head__change">Thay ảnh</div>
									)}
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
					<div className="quizCreateForm__head__3">
						{answer?.map((item, index) => (
							<QuizAnswerManager
								handleChangeContentAnswer={handleChangeContentAnswer}
								item={item}
								key={index}
								handleRemoveContentAnswer={handleRemoveContentAnswer}
								index={index}
								setImageAddNumber={setImageAddNumber}
								setImageShow={setImageShow}
							/>
						))}
						<div
							onClick={handleAddAnswer}
							className={`addAnswer ${answer?.length === 5 && "banAddAnswer"}`}
						>
							+
							{answer?.length === 5 && (
								<div style={{ position: "relative" }}>
									<div className="annouce">
										Bạn không thể thêm nhiều hơn 5 phương án
									</div>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
			{imageAddNumber !== -1 && (
				<div
					onClick={() => {
						setImageAddNumber(-1);
					}}
					className="quizAnswer__img__abs"
				></div>
			)}
			{imageAddNumber !== -1 && (
				<div className="quizAnswer__img--add">
					<div className="quizAnswer__img--add__title">
						Thêm ảnh
						<div
							onClick={() => {
								setImageAddNumber(-1);
							}}
						>
							&times;
						</div>
					</div>
					<div className="quizAnswer__img--add__input">
						<label
							onDrop={(e) => handleDrop(e, "question")}
							onDragOver={handleDragOver}
							onDragEnter={handleDragEnter}
							htmlFor="quizAnswer__img"
						>
							Nhấn vào đây hoặc kéo ảnh vào đây
						</label>
						<input
							accept="image/*"
							onChange={(e) => handleGetFile(e, "question")}
							hidden
							id="quizAnswer__img"
							type="file"
						/>
					</div>
				</div>
			)}
			{imageShow && (
				<div
					onClick={() => {
						setImageShow("");
					}}
					className="quizImage--abs__close"
				>
					<div>&times;</div>
				</div>
			)}
			{imageShow && (
				<div className="quizImage--abs">
					<img src={imageShow} alt="Ảnh" />
				</div>
			)}
		</div>
	);
};

export default QuizCreate;
