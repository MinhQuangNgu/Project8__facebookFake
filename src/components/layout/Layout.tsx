import React, { useState } from "react";
import "./style.scss";
import Header from "./Header";
import { children } from "../../interface";
const Layout: React.FC<children> = ({ children }) => {
	const [type, setType] = useState<"" | "messager">("");
	return (
		<div>
			<Header typeBig={type} setTypeBig={setType} />
			<div
				onClick={() => {
					setType("");
				}}
			>
				{children}
			</div>
		</div>
	);
};

export default Layout;
