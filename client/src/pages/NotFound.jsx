import NotFoundImg from "../assets/images/not-found.png";

const NotFound = () => {
	return (
		<div className="bg-primary min-h-screen w-screen flex flex-col lg:flex-row gap-12 sm:gap-4 lg:gap-0 items-center justify-center px-8 sm:px-24">
			{/* Error Message */}
			<div className="text-center flex flex-col justify-center w-[40%] gap-2 lg:gap-4">
				<p className="text-5xl sm:text-6xl lg:text-9xl text-gray-100 font-bold tracking-wide font-oduda">
					404 {":("}
				</p>
				<p className="text-xl sm:text-2xl lg:text-4xl font-bold text-gray-900 font-oduda">
					Oops, it seems something went wrong
				</p>
			</div>

			{/* Error Image */}
			<div className="sm:w-[80%] lg:w-[60%]">
				<img src={NotFoundImg} alt="not found" />
			</div>
		</div>
	);
};
export default NotFound;
