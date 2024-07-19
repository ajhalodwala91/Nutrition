import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoMenuOutline } from "react-icons/io5";
import { HiOutlinePlus } from "react-icons/hi";
import { navigation } from "../constants/navigation.list.js";
import { useAuthContext } from "../../contexts/AuthContext";
import useLogout from "../hooks/useLogout";

const Header = () => {
	const navigate = useNavigate();
	const { pathname } = useLocation();
	const { authUser } = useAuthContext();
	const [isHeaderOpen, setIsHeaderOpen] = useState(false);

	const isErrorPage = pathname === "/error/404";
	const isAboutPage = pathname === "/about";

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
							isErrorPage ? "text-gray-900" : "text-primary"
						}`}
					>
						Purely
					</p>
					<p
						className={`text-center font-semibold tracking-wide ${
							isErrorPage ? "text-gray-900" : "text-gray-600"
						}`}
					>
						NUTRITIOUS
					</p>
				</div>

				<div className="hidden lg:flex justify-end items-center gap-12">
					{navigation.map((link, index) => {
						const isCurrPageOpen = pathname === link.route;
						return (
							<Link
								key={index}
								to={link.route}
								className={`text-lg hover:drop-shadow-lg hover:font-semibold transition-all ${
									isCurrPageOpen && "drop-shadow-lg"
								} ${
									isErrorPage || isAboutPage
										? "hover:text-black"
										: "hover:text-primary"
								} ${
									isCurrPageOpen &&
									!isAboutPage &&
									"text-primary"
								} `}
							>
								{link.name}
							</Link>
						);
					})}
					<button
						onClick={() =>
							authUser ? handleLogout() : navigate("/login")
						}
						className={`px-4 py-2 rounded font-semibold hover:shadow-lg hover:font-semibold hover:scale-90 transition-transform ${
							isErrorPage
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
				<div className="flex flex-col items-center gap-6 w-full">
					{navigation.map((link, index) => (
						<Link
							onClick={() => setIsHeaderOpen(false)}
							key={index}
							to={link.route}
							className="text-center text-lg text-gray-200 hover:drop-shadow-lg hover:text-primary hover:font-semibold transition-transform"
						>
							{link.name}
						</Link>
					))}
					<button
						onClick={() => {
							setIsHeaderOpen(false);
							authUser ? handleLogout() : navigate("/login");
						}}
						className="bg-white px-4 py-2 text-black font-bold rounded w-28"
					>
						{authUser ? "Logout" : "Login"}
					</button>
				</div>
			</div>
		</>
	);
};
export default Header;
