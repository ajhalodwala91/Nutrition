import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useGetMe = () => {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const [data, setData] = useState({});

	const getMe = async () => {
		setLoading(true);
		try {
			const response = await fetch("/api/auth/me");
			const resData = await response.json();

			if (resData.error) {
				setError(resData.error);
				navigate("/login");
			}
			setData(resData);
		} catch (error) {
			setError(error.message);
		} finally {
			setLoading(false);
		}
	};

	return { data, error, loading, getMe };
};

export default useGetMe;
