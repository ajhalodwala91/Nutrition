import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import generateToken from "../utils/generateToken.js";

export const getMe = async (req, res) => {
	try {
		const user = await User.findById(req.user._id).select("-password");
		res.status(200).json(user);
	} catch (error) {
		console.log("Error in getMe controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
};

export const signup = async (req, res) => {
	try {
		const { fullName, email, password } = req.body;

		if (!fullName) {
			return res
				.status(400)
				.json({ error: { fullName: "Please enter your full name" } });
		}

		const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		if (!email || !emailRegex.test(email)) {
			return res
				.status(400)
				.json({ error: { email: "Please enter a valid email ID" } });
		}

		if (!password) {
			return res
				.status(400)
				.json({ error: { password: "Please enter a password" } });
		} else if (password.length < 6) {
			return res.status(400).json({
				error: {
					password: "Password should contain at least 6 characters",
				},
			});
		}

		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		const existingUser = await User.findOne({ email });
		if (existingUser) {
			return res
				.status(400)
				.json({ error: { email: "Email ID is already registered" } });
		}

		const newUser = new User({ fullName, email, password: hashedPassword });
		if (newUser) {
			generateToken(newUser._id, res);
			await newUser.save();
			res.status(201).json({
				fullName: newUser.fullName,
				email: newUser.email,
			});
		} else {
			res.status(400).json({
				error: { globalError: "Failed to register user" },
			});
		}
	} catch (error) {
		console.log("Error in signup controller", error.message);
		res.status(500).json({
			error: { globalError: "Internal Server Error" },
		});
	}
};

export const login = async (req, res) => {
	try {
		const { email, password } = req.body;

		const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		if (!email || !emailRegex.test(email)) {
			return res
				.status(400)
				.json({ error: { email: "Please enter a valid email ID" } });
		}

		if (!password) {
			return res
				.status(400)
				.json({ error: { password: "Please enter a password" } });
		}

		const user = await User.findOne({ email });
		if (!user) {
			return res.status(404).json({ error: { email: "No user found" } });
		}

		const isPasswordCorrect = await bcrypt.compare(password, user.password);
		if (!isPasswordCorrect) {
			return res
				.status(400)
				.json({ error: { password: "Incorrect Credentials" } });
		}

		generateToken(user._id, res);
		res.status(200).json({ fullName: user.fullName, email: user.email });
	} catch (error) {
		console.log("Error in login controller", error.message);
		res.status(500).json({
			error: { globalError: "Internal Server Error" },
		});
	}
};

export const logout = async (req, res) => {
	try {
		res.cookie("token", "", { maxAge: 0 });
		res.status(200).json({ message: "Logged out successfully" });
	} catch (error) {
		console.log("Error in logout controller", error.message);
		res.status(500).json({
			error: { globalError: "Internal Server Error" },
		});
	}
};
