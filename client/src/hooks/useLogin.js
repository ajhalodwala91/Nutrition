import { useState } from "react";
import { useAuthContext } from "../../contexts/AuthContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
	const navigate = useNavigate();
	const { setAuthUser } = useAuthContext();

	const [loading, setLoading] = useState(false);
	const [errors, setErrors] = useState({});

	const login = async ({ email, password }) => {
		setErrors({});
		setLoading(true);

		try {
			const emailRegex =
				/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
			let newErrors = {};

			if (!email || !emailRegex.test(email)) {
				newErrors.email = "Please enter a valid email ID";
			}

			if (!password) {
				newErrors.password = "Please enter a password";
			}

			if (Object.keys(newErrors).length > 0) {
				setErrors(newErrors);
				return;
			}

			const response = await fetch("/api/auth/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ email, password }),
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
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { errors, loading, login };
};

export default useLogin;
