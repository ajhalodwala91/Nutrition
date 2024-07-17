import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ResetPassword from "./pages/ResetPassword";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import About from "./pages/About";
import { useAuthContext } from "../contexts/AuthContext";

const App = () => {
	const { pathname } = useLocation();
	const { authUser } = useAuthContext();
	return (
		<div className="h-screen w-screen overflow-x-hidden relative">
			<Header />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />

				<Route path="/login" element={<Login />} />
				<Route path="/login/reset" element={<ResetPassword />} />
				<Route path="/signup" element={<Signup />} />

				<Route path="/error/404" element={<NotFound />} />
				<Route path="/*" element={<Navigate to="/error/404" />} />
			</Routes>

			<Toaster />
		</div>
	);
};
export default App;
