import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoMenuOutline } from "react-icons/io5";
import { HiOutlinePlus } from "react-icons/hi";
import { navigation } from "../constants/navigation";
import { useAuthContext } from "../../contexts/AuthContext";
import useLogout from "../hooks/useLogout";

const Header = () => {
	const navigate = useNavigate();
	const { pathname } = useLocation();
	const { authUser } = useAuthContext();
	const [isHeaderOpen, setIsHeaderOpen] = useState(false);

	const logout = useLogout();
	const handleLogout = async () => {
		await logout();
	};

	return (
		<>
			<div className="absolute flex gap-4 items-center justify-between p-8 md:px-16 w-screen">
				{/* Logo */}
				<div className="cursor-pointer" onClick={() => navigate("/")}>
					<p
						className={`text-center text-4xl font-semibold font-oduda ${
							pathname === "/error/404" 
								? "text-gray-900"
								: "text-primary"
						}`}
					>
						Purely
					</p>
					<p
						className={`text-center font-semibold tracking-wide ${
							pathname === "/error/404" 
								? "text-gray-900"
								: "text-gray-600"
						}`}
					>
						NUTRITIOUS
					</p>
				</div>

				<div className="hidden lg:flex justify-end items-center gap-12">
					{navigation.map((link, index) => (
						<Link
							key={index}
							to={link.route}
							className={`text-lg hover:drop-shadow-lg ${
								pathname === "/error/404" ||
								pathname === "/about"
									? "hover:text-black"
									: "hover:text-primary"
							} ${pathname === link.route && "drop-shadow-lg"}
							 ${
									pathname === link.route &&
									pathname !== "/about" &&
									"text-primary"
								} hover:font-semibold transition-all`}
						>
							{link.name}
						</Link>
					))}
					<button
						onClick={() =>
							authUser ? handleLogout() : navigate("/login")
						}
						className={`px-4 py-2 rounded font-semibold ${
							pathname === "/error/404" 
								? "bg-gray-200"
								: "bg-primary text-gray-200"
						}`}
					>
						{authUser ? "Logout" : "Login"}
					</button>
				</div>

				{/* Drawer Button */}
				{isHeaderOpen ? (
					<HiOutlinePlus
						className="lg:hidden text-4xl hover:cursor-pointer text-gray-300 rotate-45 z-20"
						onClick={() => {
							setIsHeaderOpen((isHeaderOpen) => !isHeaderOpen);
						}}
					/>
				) : (
					<IoMenuOutline
						className="lg:hidden text-4xl hover:cursor-pointer text-gray-900 z-20"
						onClick={() => {
							setIsHeaderOpen((isHeaderOpen) => !isHeaderOpen);
						}}
					/>
				)}
			</div>

			{/* Drawer */}
			<div
				className={`absolute flex items-center justify-center lg:hidden w-screen h-screen bg-black opacity-70 transition-all duration-700 z-10 ${
					isHeaderOpen ? "top-0" : "-top-[100%]"
				} `}
			>
				<div className="flex flex-col gap-6">
					{navigation.map((link, index) => (
						<Link
							onClick={() => setIsHeaderOpen(false)}
							key={index}
							to={link.route}
							className="text-center text-lg text-gray-200 hover:drop-shadow-lg hover:text-primary hover:font-semibold transition-all"
						>
							{link.name}
						</Link>
					))}
					<button
						onClick={() => {
							setIsHeaderOpen(false);
							authUser ? handleLogout() : navigate("/login");
						}}
						className="bg-white px-4 py-2 text-black font-bold rounded"
					>
						{authUser ? "Logout" : "Login"}
					</button>
				</div>
			</div>
		</>
	);
};
export default Header;