import BlogCard from "@/components/blogs/BlogCard";
import Footer from "@/components/Footer";

const Blogs = () => {
	return (
		<>
			<div className="flex flex-wrap gap-12 p-8 pt-32 sm:p-16 sm:pt-40 bg-gray-200 min-h-screen justify-center">
				<BlogCard
					route="/"
					icon=""
					title="Blog 1"
					description="Blg 2"
				/>
				<BlogCard
					route="/"
					icon=""
					title="Blog 1"
					description="Blg 2"
				/>
				<BlogCard
					route="/"
					icon=""
					title="Blog 1"
					description="Blg 2"
				/>
				<BlogCard
					route="/"
					icon=""
					title="Blog 1"
					description="Blg 2"
				/>
			</div>
			<Footer />
		</>
	);
};
export default Blogs;
