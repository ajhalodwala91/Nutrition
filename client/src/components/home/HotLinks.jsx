import nutritionalCare from "../../assets/images/nutritional-care.png";
import specializedDiets from "../../assets/images/specialized-diets.jpg";
import blogs from "../../assets/images/blogs.png";
import { Link } from "react-router-dom";

const HotLink = ({ to, img, name }) => (
	<Link
		className="relative sm:h-[400px] aspect-square w-full sm:w-[400px] overflow-hidden group"
		to={to}
	>
		<img
			src={img}
			alt={name}
			className="absolute h-full w-full object-cover transition-transform duration-700 group-hover:scale-125"
		/>
		<div className="absolute inset-0 bg-[#14532dcc] transition-all duration-200 opacity-0 group-hover:opacity-100"></div>
		<p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white font-semibold text-2xl drop-shadow-4xl">
			{name}
		</p>
	</Link>
);

const HotLinks = () => {
	return (
		<div className="flex flex-wrap p-8 sm:p-16 gap-8 sm:gap-16 items-center justify-center w-full">
			<HotLink
				to="/nutritionalcare"
				img={nutritionalCare}
				name="Nutritional Care"
			/>
			<HotLink
				to="/specializedDiets"
				img={specializedDiets}
				name="Specialized Diets"
			/>
			<HotLink to="/blogs" img={blogs} name="Blogs" />
		</div>
	);
};
export default HotLinks;
