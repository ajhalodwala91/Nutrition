import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdError } from "react-icons/md";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import useSignup from "../hooks/useSignup.js";
import { PulseLoader } from "react-spinners";

const Login = () => {
	const navigate = useNavigate();

	const [inputs, setInputs] = useState({
		fullName: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
	const [isPasswordVisible, setIsPasswordVisible] = useState(false);
	const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] =
		useState(false);
	const { errors, loading, signup } = useSignup();

	const handleSubmit = async (e) => {
		console.log(e);
		e.preventDefault();
		await signup(inputs);
	};

	return (
		<div className="flex flex-col items-center justify-center bg-gray-200 h-full p-4">
			<form className="flex flex-col gap-8 w-[80%] sm:w-[400px]">
				<div>
					<h2 className="text-3xl text-gray-900 font-medium">
						Sign Up
					</h2>

					<p className="text-gray-500 text-sm">
						Already have an account ? &nbsp;
						<Link to="/login" className="text-blue-500">
							Sign in
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
						htmlFor="fullName"
						className="text-gray-600 text-sm font-light"
					>
						Full Name
					</label>
					<input
						type="text"
						id="fullName"
						value={inputs.fullName}
						onChange={(e) =>
							setInputs({
								...inputs,
								fullName: e.target.value,
							})
						}
						className="bg-transparent border border-b-gray-800 outline-none py-1"
					/>
					{errors.fullName && (
						<div className=" flex items-center gap-1 text-red-800 text-sm">
							<MdError />
							<p> {errors.fullName}</p>
						</div>
					)}
				</div>

				<div className="flex flex-col">
					<label
						htmlFor="email"
						className="text-gray-600 text-sm font-light"
					>
						Email
					</label>
					<input
						type="text"
						id="email"
						value={inputs.email}
						onChange={(e) =>
							setInputs({
								...inputs,
								email: e.target.value,
							})
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

				<div className="flex flex-col">
					<label
						htmlFor="confirmPassword"
						className="text-gray-600 text-sm font-light"
					>
						Confirm Password
					</label>
					<div className="flex border border-b-gray-800 pr-4">
						<input
							type={
								isConfirmPasswordVisible ? "text" : "password"
							}
							id="confirmPassword"
							value={inputs.confirmPassword}
							onChange={(e) =>
								setInputs({
									...inputs,
									confirmPassword: e.target.value,
								})
							}
							className="bg-transparent flex-1 outline-none py-1"
						/>
						<span
							className="cursor-pointer"
							onClick={() =>
								setIsConfirmPasswordVisible(
									(isConfirmPasswordVisible) =>
										!isConfirmPasswordVisible
								)
							}
						>
							{isConfirmPasswordVisible ? (
								<FaRegEye />
							) : (
								<FaRegEyeSlash />
							)}
						</span>
					</div>
					{errors.confirmPassword && (
						<div className=" flex items-center gap-1 text-red-800 text-sm">
							<MdError />
							<p> {errors.confirmPassword}</p>
						</div>
					)}
				</div>

				<button
					onClick={handleSubmit}
					className="bg-primary rounded-full p-3 text-white hover:bg-[#38796a] hover:shadow-xl"
				>
					{loading ? <PulseLoader /> : "Register"}
				</button>
			</form>
		</div>
	);
};
export default Login;
