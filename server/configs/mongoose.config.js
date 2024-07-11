import mongoose from "mongoose";

const connectToDb = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGODB_URI);
		console.log(`Connected to database on ${conn.connection.host}`);
	} catch (error) {
		console.log(`Could not connect to database - ${error.message}`);
		process.exit(1);
	}
};

export default connectToDb;
