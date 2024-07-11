import toast from "react-hot-toast";
import { useState } from "react";
import { useAuthContext } from "../../contexts/AuthContext";

const useLogout = () => {
	const { setAuthUser } = useAuthContext();
	const [loading, setLoading] = useState(false);

	const logout = async () => {
		setLoading(true);
		try {
			const response = await fetch("/api/auth/logout", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
			});
			const data = await response.json();

			if (data.error) {
				throw new Error(data.error);
			}

			localStorage.removeItem("token");
			setAuthUser(null);
		} catch (error) {
			toast.error(error.message);
		} finally {
			setLoading(false);
		}
	};

	return logout;
};

export default useLogout;
