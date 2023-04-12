import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
const Login: React.FC = () => {
	return (
		<div className="auth">
			<div className="auth__wrap">
				<div className="auth__input">
					<input placeholder="Nhập email" type="text" name="email" />
				</div>
				<div className="auth__input">
					<input placeholder="Nhập mật khẩu" type="password" name="password" />
				</div>
				<div className="auth__button">
					<button>Đăng nhập</button>
				</div>
				<div className="auth__forgot">
					<Link to="/forgot__password">Quên mật khẩu</Link>
				</div>
				<div className="auth__button__register">
					<button>Tạo tài khoản</button>
				</div>
			</div>
		</div>
	);
};

export default Login;
