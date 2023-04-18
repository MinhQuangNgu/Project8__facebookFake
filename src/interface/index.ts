import { ReactNode } from "react";

export interface User {
	name: string;
	image: string;
	token: string;
}

export interface router {
	path: string;
	element: React.FC;
	Layout?: React.FC<children> | null;
}
export interface children {
	children: ReactNode;
}
export interface quiz {
	name: string;
	image: string;
	_id: string;
	questions: [
		{
			_id: string;
			correctAnswer: string;
			image: string;
			name: string;
			answers: string[];
		}
	];
}
export interface ErrorLogin {
	msg: string;
}
export interface quiz {
	name: string;
	image: string;
	_id: string;
	questions: [
		{
			_id: string;
			correctAnswer: string;
			image: string;
			name: string;
			answers: string[];
		}
	];
}
export interface question {
	answers: string[];
	correctAnswer: string;
	image: ProgressEvent<FileReader> | unknown;
	name: string;
	url?: string;
	_id?: string;
	[key: string]: any;
}
