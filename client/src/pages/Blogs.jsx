import BlogCard from "@/components/blogs/BlogCard";
import Footer from "@/components/Footer";
import { blogs } from "@/placeholders/blogs.placeholder";

const Blogs = () => {
	return (
		<>
			<div className="flex flex-wrap gap-12 p-8 pt-32 sm:p-16 sm:pt-40 bg-gray-200 min-h-screen justify-center">
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
			<Footer />
		</>
	);
};
export default Blogs;
