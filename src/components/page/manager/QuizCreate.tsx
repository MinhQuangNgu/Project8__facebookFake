import React, { useRef, useState } from "react";
import "./style.scss";
type Props = {};

const QuizCreate: React.FC = (props: Props) => {
	const [image, setImage] = useState<string>();
	const [name, setName] = useState<string>("");
	const nameRef = useRef<HTMLTextAreaElement>(null);
	const fileRef = useRef<File>();

	//question
	const [quesionImg, setQuesitionImg] = useState<string>();
	const [correctAnswer, setCorrectAnswer] = useState<number>(0);
	const fileQuestionRef = useRef<File>();
	const nameQuestionRef = useRef<HTMLTextAreaElement>(null);
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
					fileRef.current = file;
					setImage(event.target?.result?.toString());
				} else {
					fileQuestionRef.current = file;
					setQuesitionImg(event.target?.result?.toString());
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
				fileRef.current = file;
				setImage(event.target?.result?.toString());
			} else {
				fileQuestionRef.current = file;
				setQuesitionImg(event.target?.result?.toString());
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

	const handleTest = (): void => {
		setName(nameRef.current?.value || "");
	};
	return (
		<div className="quizCreate">
			<div className="quizCreate__wrap">
				<div className="quizCreate__title">
					<i>Tạo mới</i>
					<div className="quizCreate__times">&times;</div>
				</div>
				<div className="quizCreate__body">
					<div className="quizCreate__body__1">
						<div style={{ width: "100%" }} className="quizCard__admin">
							<div className="quizCard__wrap">
								<div className="quizCard__input">
									<div>
										<label
											onDrop={(e) => handleDrop(e, "quiz")}
											onDragOver={handleDragOver}
											onDragEnter={handleDragEnter}
											className="quizCard__label"
											htmlFor="inputFileADmin"
										></label>
										<input
											accept="image/*"
											onChange={(e) => handleGetFile(e, "quiz")}
											hidden
											id="inputFileADmin"
											type="file"
										/>
									</div>
								</div>
								<div
									style={{ border: "0.1rem solid rgba(0, 0, 0, 0.4)" }}
									className="quizCard__image"
								>
									<img src={image} alt="Quiz Image" />
								</div>
								<div
									style={{ borderTop: "0.1rem solid rgba(0, 0, 0, 0.1)" }}
									className="quizCard__name"
								>
									<div className="quizCard__name-elips">
										<i>{name}</i>
									</div>
								</div>
							</div>
							<div className="input__text">
								<textarea ref={nameRef} placeholder="Enter Name of this quiz" />
							</div>
							<div className="input__create__button">
								<button className="btn btn-default">Tạo mới</button>
								<button onClick={handleTest} className="btn btn-default">
									Test thử name
								</button>
							</div>
						</div>
					</div>
					<div className="quizCreate__body__2"></div>
				</div>
			</div>
		</div>
	);
};

export default QuizCreate;
