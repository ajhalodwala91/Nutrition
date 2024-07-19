import { useState } from "react";
import { MdCheckCircle, MdError } from "react-icons/md";
import { Link } from "react-router-dom";
import { PulseLoader } from "react-spinners";

const ResetPassword = () => {
	const [email, setEmail] = useState("");
	const [otp, setOtp] = useState("");
	const [isOtpSent, setIsOtpSent] = useState(false);
	const [errors, setErrors] = useState({});
	const [messages, setMessages] = useState({});

	const handleSendOtp = (e) => {
		e.preventDefault();
		if (!email) {
			setMessages({});
			setErrors({ ...errors, email: "Email is required" });
			return;
		}
		setErrors({});
		setMessages({ ...messages, email: "Please check your mail" });

		setIsOtpSent(true);
	};

	const handleResetPassword = (e) => {
		e.preventDefault();
	};

	return (
		<div className="flex items-center justify-center bg-gray-200 h-full">
			<div className="flex flex-col gap-8 w-[80%] sm:w-[400px]">
				<div>
					<h2 className="text-3xl text-gray-900 font-medium">
						Forgot Password
					</h2>

					<p className="text-gray-500 text-sm mt-2">
						Don't have an account ? &nbsp;
						<Link to="/signup" className="text-blue-500">
							Create account
						</Link>
					</p>
				</div>

				<form className="flex flex-col gap-4">
					<label
						htmlFor="email"
						className="text-gray-600 text-sm font-light"
					>
						Email
					</label>
					<div className="flex border border-b-gray-800 pr-4">
						<input
							type="text"
							id="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="bg-transparent flex-1 outline-none py-1"
						/>
						<span
							className="text-primary font-semibold cursor-pointer text-nowrap"
							onClick={!isOtpSent ? handleSendOtp : undefined}
						>
							{isOtpSent ? "OTP Sent" : "GET OTP"}
						</span>
					</div>
					{errors.email && (
						<div className=" flex items-center gap-1 text-red-800 text-sm">
							<MdError />
							<p> {errors.email}</p>
						</div>
					)}
					{messages.email && (
						<div className=" flex items-center gap-1 text-green-800 text-sm">
							<MdCheckCircle />
							<p> {messages.email}</p>
						</div>
					)}
				</form>

				<form className=" flex flex-col gap-8">
					<div className="flex flex-col">
						<label
							htmlFor="otp"
							className="text-gray-600 text-sm font-light"
						>
							OTP
						</label>
						<input
							disabled={!isOtpSent}
							type="text"
							id="otp"
							value={otp}
							onChange={(e) => setOtp(e.target.value)}
							className={`bg-transparent border outline-none py-1 ${
								isOtpSent
									? "border-b-gray-800"
									: "border-b-gray-400 cursor-not-allowed"
							}`}
						/>
					</div>

					{isOtpSent && (
						<span className="text-gray-600 font-light">
							Didn't receive an OTP?{" "}
							<span className="underline cursor-pointer">
								Resend in 15s
							</span>
						</span>
					)}

					<button
						disabled={!isOtpSent}
						onClick={handleResetPassword}
						className={`bg-primary rounded-full p-3 text-white hover:bg-primaryhover hover:shadow-xl ${
							!isOtpSent && "cursor-not-allowed"
						}`}
					>
						{false ? <PulseLoader /> : "Reset Password"}
					</button>
				</form>
			</div>
		</div>
	);
};
export default ResetPassword;
