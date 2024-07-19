import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Header from "./components/Header";

const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));
const ResetPassword = lazy(() => import("./pages/ResetPassword"));
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const NutritionalCare = lazy(() => import("./pages/NutritionalCare"));
const CarePage = lazy(() => import("./pages/CarePage"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => {
	return (
		<div className="h-screen w-screen overflow-x-hidden relative">
			<Header />

			<Suspense
				fallback={
					<div className="flex items-center justify-center h-screen w-screen">
						Loading...
					</div>
				}
			>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route
						path="/nutritionalcare"
						element={<NutritionalCare />}
					/>
					<Route
						path="/nutritionalcare/:page"
						element={<CarePage />}
					/>
					<Route path="/about" element={<About />} />

					<Route path="/login" element={<Login />} />
					<Route path="/login/reset" element={<ResetPassword />} />
					<Route path="/signup" element={<Signup />} />

					<Route path="/error/404" element={<NotFound />} />
					<Route path="/*" element={<Navigate to="/error/404" />} />
				</Routes>
			</Suspense>

			<Toaster />
		</div>
	);
};
export default App;
