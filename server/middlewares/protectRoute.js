import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoute = async (req, res, next) => {
	try {
		const token = req.cookies.token;
		if (!token) {
			return res
				.status(401)
				.json({ error: "Unauthorized : No token provided" });
		}

		const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
		if (!decodedToken) {
			return res
				.status(401)
				.json({ error: "Unauthorized : Invalid Token" });
		}

		const user = await User.findById(decodedToken.userId).select(
			"-password"
		);
		if (!user) {
			return res.status(404).json({ error: "User Not Found" });
		}

		req.user = user;
		next();
	} catch (error) {
		console.log("Error in protectRoute middleware");
		res.status(500).json({ error: "Internal Server Error" });
	}
};

export default protectRoute;
