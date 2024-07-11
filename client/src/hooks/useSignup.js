import { useState } from "react";
import { useAuthContext } from "../../contexts/AuthContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useSignup = () => {
	const navigate = useNavigate();
	const { setAuthUser } = useAuthContext();

	const [loading, setLoading] = useState(false);
	const [errors, setErrors] = useState({});

	const signup = async ({ fullName, email, password, confirmPassword }) => {
		setErrors({});
		setLoading(true);

		try {
			const emailRegex =
				/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
			let newErrors = {};

			if (!fullName) {
				newErrors.fullName = "Please enter your full name";
			}

			if (!email || !emailRegex.test(email)) {
				newErrors.email = "Please enter a valid email ID";
			}

			if (!password) {
				newErrors.password = "Please enter a password";
			} else if (password.length < 6) {
				newErrors.password =
					"Password should contain at least 6 characters";
			}

			if (!confirmPassword) {
				newErrors.confirmPassword = "Please confirm your password";
			} else if (password !== confirmPassword) {
				newErrors.confirmPassword = "Passwords do not match";
			}

			if (Object.keys(newErrors).length > 0) {
				setErrors(newErrors);
				return;
			}

			const response = await fetch("/api/auth/signup", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ fullName, email, password }),
				credentials: "include",
			});
			const data = await response.json();

			if (data.error) {
				setErrors(data.error);
				return;
			}

			localStorage.setItem("token", JSON.stringify(data));
			setAuthUser(data);
			navigate("/");
		} catch (error) {
			toast.error(error);
		} finally {
			setLoading(false);
		}
	};

	return { errors, loading, signup };
};

export default useSignup;
