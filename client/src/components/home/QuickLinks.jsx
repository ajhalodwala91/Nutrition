import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const QuickLink = ({ name, to }) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<Link
			to={to}
			onMouseOver={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			className={`flex items-center justify-between border-b-2 border-gray-200 text-xl sm:text-2xl p-8 transition-all duration-500 ${
				isHovered && "bg-gray-100 text-gray-800"
			}`}
		>
			<span>{name}</span>
			<IoIosArrowForward />
		</Link>
	);
};

const QuickLinks = () => {
	return (
		<div className="flex flex-col gap-6 sm:gap-12 px-8 py-16 sm:p-16 md:px-32 bg-primary text-gray-200 w-full">
			<div className="flex flex-col gap-2">
				<h4 className="text-3xl sm:text-4xl font-semibold">
					Nutritional Care Plan
				</h4>
				<p className="text-lg">
					“The doctor of the future will no longer treat the human
					frame with drugs, but rather will cure and prevent disease
					with nutrition.” –Thomas Edison
				</p>
			</div>

			<div className="md:w-4/5 xl:w-3/5">
				<QuickLink name="Diabetes" to="/nutritionalcare/diabetesmellitus" />
				<QuickLink name="PCOS/PCOD" to="/nutritionalcare/pcospcod" />
				<QuickLink name="Hypertension" to="/nutritionalcare/hypertension" />
				<QuickLink name="Obesity" to="/nutritionalcare/obesity" />
			</div>
		</div>
	);
};
export default QuickLinks;
