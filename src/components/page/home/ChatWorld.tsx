import React, { useState } from "react";
import "./style.scss";
import WorldChat from "../../chat/WorldChat";
const ChatWorld: React.FC = () => {
	const [chat, setChat] = useState<string>("");
	return (
		<div className="chat__all">
			<div className="chat__content">
				<WorldChat />
				<WorldChat />
				<WorldChat />
				<WorldChat />
				<WorldChat />
				<WorldChat />
				<WorldChat />
			</div>
			<div className="chat__all__input">
				<div className="chat__all_wrap">
					<div
						onInput={(e) => {
							const value = e.target as HTMLElement;
							setChat(value.innerHTML);
						}}
						contentEditable={true}
					></div>
					<button>Gửi</button>
				</div>
				{!chat && <div className="chat__all__abs">Nhắn tin</div>}
			</div>
		</div>
	);
};

export default ChatWorld;
