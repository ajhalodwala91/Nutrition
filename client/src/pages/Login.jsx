import { useState } from "react";
import { Link } from "react-router-dom";
import { MdError } from "react-icons/md";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import useLogin from "../hooks/useLogin.js";
import { PulseLoader } from "react-spinners";

const Login = () => {
	const [inputs, setInputs] = useState({ email: "", password: "" });
	const [isPasswordVisible, setIsPasswordVisible] = useState(false);
	const { errors, loading, login } = useLogin();

	const handleSubmit = async (e) => {
		e.preventDefault();
		await login(inputs);
	};

	return (
		<div className="flex items-center justify-center bg-gray-200 h-screen p-8 sm:p-16">
			<form className="flex flex-col gap-8 w-4/5 sm:w-[400px]">
				<div>
					<h2 className="text-3xl text-gray-900 font-medium">
						Sign In
					</h2>

					<p className="text-gray-500 text-sm">
						New user ? &nbsp;
						<Link to="/signup" className="text-blue-500">
							Create an account
						</Link>
					</p>
				</div>

				{errors.globalError && (
					<div className=" flex items-center gap-1 text-red-800 text-sm">
						<MdError />
						<p> {errors.globalError}</p>
					</div>
				)}

				<div className="flex flex-col">
					<label
						htmlFor="email"
						className="text-gray-600 text-sm font-light"
					>
						Email Address
					</label>
					<input
						type="text"
						id="email"
						value={inputs.email}
						onChange={(e) =>
							setInputs({ ...inputs, email: e.target.value })
						}
						className="bg-transparent border border-b-gray-800 outline-none py-1"
					/>
					{errors.email && (
						<div className=" flex items-center gap-1 text-red-800 text-sm">
							<MdError />
							<p> {errors.email}</p>
						</div>
					)}
				</div>

				<div className="flex flex-col">
					<label
						htmlFor="password"
						className="text-gray-600 text-sm font-light"
					>
						Password
					</label>
					<div className="flex border border-b-gray-800 pr-4">
						<input
							type={isPasswordVisible ? "text" : "password"}
							id="password"
							value={inputs.password}
							onChange={(e) =>
								setInputs({
									...inputs,
									password: e.target.value,
								})
							}
							className="bg-transparent flex-1 outline-none py-1"
						/>
						<span
							className="cursor-pointer"
							onClick={() =>
								setIsPasswordVisible(
									(isPasswordVisible) => !isPasswordVisible
								)
							}
						>
							{isPasswordVisible ? (
								<FaRegEye />
							) : (
								<FaRegEyeSlash />
							)}
						</span>
					</div>
					{errors.password && (
						<div className=" flex items-center gap-1 text-red-800 text-sm">
							<MdError />
							<p> {errors.password}</p>
						</div>
					)}
				</div>

				<Link
					to="/login/reset"
					className="text-center text-gray-400 font-light underline"
				>
					Forgot Password?
				</Link>

				<button
					onClick={handleSubmit}
					className="bg-primary rounded-full p-3 text-white hover:bg-[#38796a] hover:shadow-xl"
				>
					{loading ? <PulseLoader /> : "Login"}
				</button>
			</form>
		</div>
	);
};
export default Login;
