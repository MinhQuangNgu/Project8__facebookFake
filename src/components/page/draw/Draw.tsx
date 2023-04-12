import React, { useState } from "react";
import "./style.scss";
import DrawCard from "./DrawCard";
const Draw: React.FC = () => {
	return (
		<div className="draw">
			<div className="draw__wrap">
				<div>
					<DrawCard />
					<DrawCard />
					<DrawCard />
				</div>
			</div>
		</div>
	);
};

export default Draw;
