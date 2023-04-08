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
