import React, { useState, useEffect, useRef, useContext } from "react";
import "./style.scss";
import QuizAnswer from "./QuizAnswer";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../../../../redux/store";
import { quiz } from "../../../../interface";
const QuizDetail: React.FC = () => {
	const { slug } = useParams();
	const [quiz, setQuiz] = useState<quiz>();
	const [number, setNumber] = useState<number>(0);
	const [answer, setAnswer] = useState<string | null>(null);
	const [times, setTimes] = useState<number>(60);
	const [percent, setPercent] = useState<number>(0);
	const correctNumber = useRef<number>(0);
	const successRef = useRef<HTMLAudioElement>(null);
	const wrongRef = useRef<HTMLAudioElement>(null);

	const alreadyArr = useRef<number[]>([]);

	const navigate = useNavigate();

	const [result, setResult] = useState<boolean>(false);

	useEffect(() => {
		const timeInterval = setInterval(() => {
			if (!result) {
				setTimes((prev) => Math.max(0, prev - 1));
			}
		}, 1000);

		return () => {
			clearInterval(timeInterval);
		};
	}, [slug, result]);

	useEffect(() => {
		if (quiz) {
			setRandomNumber();
		}
	}, [quiz]);

	const setRandomNumber = (): void => {
		if (quiz) {
			const num = generateUniqueRandomNumber(
				alreadyArr.current,
				quiz?.questions?.length
			);
			alreadyArr.current.push(num);
			setNumber(num);
		}
	};

	function generateUniqueRandomNumber(array: number[], max: number): number {
		let num = Math.floor(Math.random() * max);
		while (array.includes(num)) {
			num = Math.floor(Math.random() * max);
		}
		return num;
	}

	useEffect(() => {
		if (answer && quiz) {
			if (answer === quiz?.questions[number]?.correctAnswer) {
				if (successRef.current) {
					successRef.current.play();
				}
				setTimeout(() => {
					correctNumber.current++;
					setAnswer(null);
					setRandomNumber();
				}, 3000);
			} else {
				if (wrongRef.current) {
					wrongRef.current.play();
				}
				setTimeout(() => {
					setAnswer(null);
					setRandomNumber();
				}, 3000);
			}
		}
	}, [answer]);

	const auth = useAppSelector((state) => state.auth);

	// const handleUpdateHistory = async (): Promise<void> => {
	// 	if (!quiz) {
	// 		return;
	// 	}
	// 	try {
	// 		await axios.post(
	// 			`/v1/quiz/take_quiz`,
	// 			{
	// 				id: slug,
	// 				result: (correctNumber?.current / quiz?.questions?.length) * 100,
	// 				time: 1800 - times,
	// 			},
	// 			{
	// 				headers: {
	// 					token: `Bearer ${auth.user?.token}`,
	// 				},
	// 			}
	// 		);
	// 	} catch (error) {}
	// };

	useEffect(() => {
		if (quiz) {
			if (alreadyArr.current.length > quiz?.questions?.length - 1) {
				setPercent((correctNumber?.current / quiz?.questions?.length) * 100);
				setResult(true);
				setNumber(quiz?.questions?.length - 1);
				// handleUpdateHistory();
			}
		}
	}, [number]);
	const style = {
		background: `conic-gradient(#56CCF2 ${percent * 3.6}deg,transparent 0deg)`,
	};
	return (
		<div className="quizDetail">
			<div className="audio_controller">
				<audio hidden ref={successRef} controls>
					<source
						src="https://res.cloudinary.com/dgn9bcr5s/video/upload/v1680273443/quiz/Correct_answer_Sound_effect_o4obc9.mp3"
						type="audio/mpeg"
					/>
				</audio>
				<audio hidden ref={wrongRef} controls>
					<source
						src="https://res.cloudinary.com/dgn9bcr5s/video/upload/v1680273442/quiz/Wrong_Answer_Sound_effect_ueqdyp.mp3"
						type="audio/mpeg"
					/>
				</audio>
			</div>
			<div className="quizDetail__container">
				<div className="quizDetail__quiz">
					<div className="quizDetail__quiz__title d-flex center-h">
						<i>Anh Quang có dep zai ko?</i>
					</div>
					<div className="d-flex center-h quizDetail__image">
						<img
							src="https://treobangron.com.vn/wp-content/uploads/2022/09/background-dep-17.jpg"
							alt="oki"
						/>
					</div>
					<div className="quiz__answer">
						<QuizAnswer index={0} />
						<QuizAnswer index={1} />
						<QuizAnswer index={2} />
						<QuizAnswer index={3} />
					</div>
				</div>
				<div className="times__container">
					<div className="times___wrap">{times}</div>
				</div>
			</div>
			{result && (
				<div className="point">
					<div className="point__times">
						<div
							onClick={() => {
								navigate("/");
							}}
						>
							&times;
						</div>
					</div>
					<div className="point__result">
						<div className="point__full">
							<div className="point__circle" style={style}></div>
							<div className="point__percent">
								{quiz && Number.parseFloat(percent.toString()).toFixed(2)}%
							</div>
						</div>
						<div className="point__answers">
							<div>
								Câu đúng : <i>{correctNumber?.current} câu</i>
							</div>
							<div>
								Câu sai :
								<i>
									{" "}
									{quiz && quiz.questions?.length - correctNumber?.current} câu
								</i>
							</div>
							<div>
								Thời gian:
								<i>
									{" "}
									{`${
										Math.floor((1800 - times) / 60) >= 10 ? "" : "0"
									}${Math.floor((1800 - times) / 60)} phút ${
										Math.floor((1800 - times) % 60) >= 10 ? "" : "0"
									}${Math.floor((1800 - times) % 60)}`}{" "}
									giây
								</i>
							</div>
						</div>
					</div>
					<div className="point__button">
						<button
							onClick={() => {
								navigate("/");
							}}
							className="btn btn-default"
						>
							Ok
						</button>
					</div>
				</div>
			)}
			{result && <div className="point__cancel"></div>}
		</div>
	);
};

export default QuizDetail;
