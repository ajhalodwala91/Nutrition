import { useNavigate, useParams } from "react-router-dom";
import { careList } from "../constants/nutritionalcare.list";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import BlogCard from "@/components/blogs/BlogCard";
import { blogs } from "@/placeholders/blogs.placeholder";
import { posts } from "@/placeholders/posts.placeholder";
import { HiOutlinePlus } from "react-icons/hi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const CarePage = () => {
	const navigate = useNavigate();

	const [modal, setModal] = useState({
		status: false,
		postIdx: -1,
	});

	const { page } = useParams();
	const carePage = careList.find((item) => item.route.endsWith(page));

	useEffect(() => {
		if (!carePage) {
			navigate("/nutritionalcare");
		}
	}, [carePage, modal]);

	return (
		<>
			<div className="p-8 pt-32 sm:p-16 sm:pt-40 bg-gray-200 text-gray-900 min-h-screen">
				<div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
					{carePage?.cover && (
						<img
							src={carePage?.cover}
							alt={carePage?.title}
							className="rounded-xl lg:rounded-3xl lg:h-[500px] w-full lg:w-1/2 lg:max-w-[600px] object-contain lg:object-cover"
						/>
					)}

					<div className="flex flex-col flex-1 gap-6 lg:h-[500px] overflow-auto pr-4 scrollview">
						<h1 className="text-4xl sm:text-6xl font-oduda tracking-wide break-words">
							{carePage?.title}
						</h1>
						<p className="sm:text-lg leading-7 sm:leading-8 whitespace-pre-wrap">
							{carePage?.content}
						</p>
					</div>
				</div>

				{/* Related Posts Section */}
				<div>
					<h1 className="text-4xl font-semibold break-words py-8 sm:py-12">
						Related Posts
					</h1>

					<div className="flex overflow-x-auto scrollview pb-8 sm:pb-0 sm:horizontal-scrollview gap-12 bg-gray-200">
						{posts.map((post, index) => (
							<img
								key={index}
								src={post}
								alt=""
								className="h-96 rounded-lg cursor-pointer"
								onClick={() =>
									setModal({
										status: true,
										postIdx: index,
									})
								}
							/>
						))}
					</div>
				</div>

				{/* Modal */}
				{modal.status && (
					<div className="fixed z-30 h-full w-screen bg-black bg-opacity-50 top-0 left-0">
						{/* Close Button */}
						<span className="fixed top-12 sm:top-16 right-8 sm:right-16 rounded-full h-12 w-12 z-40">
							<HiOutlinePlus
								className="absolute-center text-4xl hover:cursor-pointer text-white xs:text-black sm:text-white rotate-45"
								onClick={() => {
									setModal({ status: false, postIdx: -1 });
								}}
							/>
						</span>

						{/* Image */}
						<img
							src={posts[modal.postIdx]}
							alt=""
							className="w-4/5 xs:w-[unset] xs:h-4/5 rounded-xl absolute-center"
						/>

						{/* Left Arrow */}
						{modal.postIdx > 0 && (
							<span className="fixed top-1/2 -translate-y-1/2 left-0 sm:left-16 rounded-full h-12 w-12">
								<IoIosArrowBack
									className="absolute-center text-3xl xs:text-4xl hover:cursor-pointer text-white xs:text-black sm:text-white z-20"
									onClick={() => {
										setModal({
											status: true,
											postIdx:
												modal.postIdx > 0
													? modal.postIdx - 1
													: 0,
										});
									}}
								/>
							</span>
						)}

						{/* Right Arrow */}
						{modal.postIdx < posts.length - 1 && (
							<span className="fixed top-1/2 -translate-y-1/2 right-0 sm:right-16 rounded-full h-12 w-12">
								<IoIosArrowForward
									className="absolute-center text-3xl xs:text-4xl hover:cursor-pointer text-white xs:text-black sm:text-white z-20"
									onClick={() => {
										setModal({
											status: true,
											postIdx:
												modal.postIdx < posts.length - 1
													? modal.postIdx + 1
													: posts.length - 1,
										});
									}}
								/>
							</span>
						)}
					</div>
				)}

				{/* Related Blogs Section */}
				<div>
					<h1 className="text-4xl font-semibold break-words py-8 sm:py-12">
						Related Blogs
					</h1>

					<div className="flex flex-col xs:flex-row overflow-x-auto scrollview pb-8 sm:pb-0 sm:horizontal-scrollview gap-12 bg-gray-200">
						{blogs.map((blog, index) => (
							<BlogCard
								key={index}
								createdOn={blog.updatedAt}
								route={`/blog/${blog._id}`}
								icon={blog.coverImg}
								title={blog.title}
								description={blog.descrition}
								views={blog.views}
								likes={blog.likes}
								isLiked={blog.isLiked}
							/>
						))}
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
};
export default CarePage;
