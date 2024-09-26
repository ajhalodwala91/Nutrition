import { parseDate } from "@/utils/parseDate";
import { Heart } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const BlogCard = ({
	route,
	createdOn,
	icon,
	title,
	description,
	views,
	likes,
}) => {
	const [isLiked, setIsLiked] = useState(false);

	return (
		<div className="min-w-full xs:min-w-[380px] max-w-[380px] bg-gray-50 rounded-xl p-6 sm:p-8 hover:scale-[95%] hover:shadow-2xl transition-transform duration-300 shadow-xl">
			<Link to={route} className="flex flex-col gap-6">
				<img
					src={icon}
					onError={(e) => e.target.src = "https://media.istockphoto.com/id/1500807425/vector/image-not-found-icon-vector-design.jpg?s=612x612&w=0&k=20&c=SF3EoL0zSi3XUwFzduMo3xdJFEk8V5IUsGqRocgPEtU="}
					alt={title}
					className="h-64 sm:h-80 object-cover rounded-lg"
				/>
				<div className="flex flex-col gap-3">
					<p className="text-xs">{parseDate(createdOn)}</p>
					<h6 className="text-2xl font-light text-primary">
						{title}
					</h6>
					<p className="text-sm border-b border-gray-600 pb-4">
						{description}
					</p>
				</div>
			</Link>
			<div className="flex justify-between items-center pt-4">
				<p className="text-xs">{views} views</p>
				<p className="text-xs flex justify-center items-center gap-1">
					<span>{likes}</span>
					{isLiked ? (
						<Heart
							strokeWidth={1}
							size={16}
							stroke="#e84a43"
							fill="#e84a43"
							onClick={() => setIsLiked(false)}
						/>
					) : (
						<Heart
							strokeWidth={1}
							size={16}
							onClick={() => setIsLiked(true)}
						/>
					)}
				</p>
			</div>
		</div>
		//
		//
		//
		// 	</div>
		// </Link>
	);
};
export default BlogCard;
