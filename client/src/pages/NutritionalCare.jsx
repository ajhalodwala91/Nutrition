import Footer from "../components/Footer.jsx";
import CareCard from "../components/nutritionalcare/CareCard";
import { careList } from "../constants/nutritionalcare.list.js";

const NutritionalCare = () => {
	return (
		<>
			<div className="flex flex-wrap gap-12 p-8 pt-32 sm:p-16 sm:pt-40 bg-gray-200 min-h-screen justify-center">
				{careList &&
					careList.map((care, index) => (
						<CareCard
							key={index}
							route={care.route}
							icon={care.icon}
							title={care.title}
							description={care.description}
						/>
					))}
			</div>
			<Footer />
		</>
	);
};
export default NutritionalCare;
