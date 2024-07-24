import { Link } from "react-router-dom";

const BlogCard = ({ route, icon, title, description }) => {
	return (
		<Link
			to={route}
			className="flex flex-col gap-6 h-[450px] sm:h-[500px] w-[350px] bg-gray-50 rounded-xl p-8 text-center hover:scale-[95%] hover:shadow-2xl transition-transform duration-300 shadow-xl"
		>
			<img src={icon} alt={title} className="h-64 object-contain" />
			<div className="flex flex-col gap-4">
				<h6 className="text-3xl font-extralight font-oduda text-primary">
					{title}
				</h6>
				<p className="text-sm">{description}</p>
			</div>
		</Link>
	);
};
export default BlogCard;
