import React, { useEffect, useRef, useState } from "react";
import "./style.scss";
import { Link, useNavigate } from "react-router-dom";
type Props = {};

const Register: React.FC = (props: Props) => {
	const navigate = useNavigate();
	const [password, setPassword] = useState<boolean>(false);
	const [repassword, setRePassword] = useState<boolean>(false);
	const passwordRef = useRef<HTMLInputElement>(null);
	const repasswordRef = useRef<HTMLInputElement>(null);
	useEffect(() => {
		window.google?.accounts?.id?.initialize({
			client_id:
				"671774617188-al0bsd22uj8j4m1vgkkr2ipbufpkr5t6.apps.googleusercontent.com",
			callback: handleCallbackGoogle,
		});
		window.google?.accounts?.id?.renderButton(
			document.getElementById("loginGoogle"),
			{
				type: "icon",
				theme: "outline",
				size: "large",
			}
		);
		window.google?.accounts?.id?.prompt();
	}, [window.google?.accounts]);

	const handleCallbackGoogle = async (response: any) => {
		console.log(response);
	};
	return (
		<div className="auth">
			<div className="auth__wrap">
				<div className="auth__input">
					<input placeholder="Nhập tên" type="text" name="name" />
				</div>
				<div className="auth__input">
					<input placeholder="Nhập email" type="text" name="email" />
				</div>
				<div className="auth__input auth__password">
					<input
						ref={passwordRef}
						placeholder="Nhập mật khẩu"
						type="password"
						name="password"
					/>
					<div className="eyes">
						{!password ? (
							<i
								onClick={() => {
									if (passwordRef.current) {
										passwordRef.current.type = "text";
									}
									setPassword(true);
								}}
								className="fa-solid fa-eye-slash"
							></i>
						) : (
							<i
								onClick={() => {
									if (passwordRef.current) {
										passwordRef.current.type = "password";
									}
									setPassword(false);
								}}
								className="fa-solid fa-eye"
							></i>
						)}
					</div>
				</div>
				<div className="auth__input auth__password">
					<input
						ref={repasswordRef}
						placeholder="Nhập lại mật khẩu"
						type="password"
						name="password"
					/>
					<div className="eyes">
						{!repassword ? (
							<i
								onClick={() => {
									if (repasswordRef.current) {
										repasswordRef.current.type = "text";
									}
									setRePassword(true);
								}}
								className="fa-solid fa-eye-slash"
							></i>
						) : (
							<i
								onClick={() => {
									if (repasswordRef.current) {
										repasswordRef.current.type = "password";
									}
									setRePassword(false);
								}}
								className="fa-solid fa-eye"
							></i>
						)}
					</div>
				</div>
				<div className="auth__button">
					<button>Đăng Ký</button>
				</div>
				<div className="auth__forgot">
					<Link to="/forgot__password">Quên mật khẩu</Link>
				</div>
				<div className="login__google">
					<div id="loginGoogle"></div>
				</div>
				<div className="auth__button__register">
					<button
						onClick={() => {
							navigate("/login");
						}}
					>
						Đã có tài khoản?
					</button>
				</div>
			</div>
		</div>
	);
};

export default Register;
