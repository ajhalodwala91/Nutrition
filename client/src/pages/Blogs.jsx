import BlogCard from "@/components/blogs/BlogCard";
import Footer from "@/components/Footer";

const Blogs = () => {
	return (
		<>
			<div className="flex flex-wrap gap-12 p-8 pt-32 sm:p-16 sm:pt-40 bg-gray-200 min-h-screen justify-center">
				<BlogCard
					createdOn={new Date(new Date().valueOf() - Math.random()*(1e+12))}
					route="/"
					icon="https://static.wixstatic.com/media/f5af78_8a0c0c7ad0524e8c9db0ea850035c1cb~mv2_d_3000_2246_s_2.jpg/v1/fill/w_471,h_354,fp_0.50_0.50,q_90,enc_auto/f5af78_8a0c0c7ad0524e8c9db0ea850035c1cb~mv2_d_3000_2246_s_2.jpg"
					title="The one thing I would tell to my 16 year old self"
					description="Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading...."
					views={5}
					likes={2}
					isLiked={true}
				/>
				<BlogCard
					createdOn={new Date(new Date().valueOf() - Math.random()*(1e+12))}
					route="/"
					icon="https://static.wixstatic.com/media/f5af78_9340967f266a43d1a4be9b8628a4cf31~mv2_d_3000_2246_s_2.jpg/v1/fill/w_454,h_340,fp_0.50_0.50,q_90,enc_auto/f5af78_9340967f266a43d1a4be9b8628a4cf31~mv2_d_3000_2246_s_2.jpg"
					title="Can’t stop scrolling through your friends’ feed?"
					description="Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading...."
					views={1}
					likes={0}
					isLiked={false}
				/>
				<BlogCard
					createdOn={new Date(new Date().valueOf() - Math.random()*(1e+12))}
					route="/"
					icon="https://static.wixstatic.com/media/f5af78_50b8941e194a4321b9f7eced71c79c19~mv2_d_3000_2246_s_2.jpg/v1/fill/w_454,h_340,fp_0.50_0.50,q_90,enc_auto/f5af78_50b8941e194a4321b9f7eced71c79c19~mv2_d_3000_2246_s_2.jpg"
					title="How I stopped being afraid of being weak"
					description="Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading...."
					views={7}
					likes={2}
					isLiked={true}
				/>
				<BlogCard
					createdOn={new Date(new Date().valueOf() - Math.random()*(1e+12))}
					route="/"
					icon="https://static.wixstatic.com/media/f5af78_5f1baf13e0f947e3a8edca6dfeb0113f~mv2_d_3000_2246_s_2.jpg/v1/fill/w_454,h_340,fp_0.50_0.50,q_90,enc_auto/f5af78_5f1baf13e0f947e3a8edca6dfeb0113f~mv2_d_3000_2246_s_2.jpg"
					title="5 great side effects of running with music"
					description="Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your audience to continue reading...."
					views={2}
					likes={1}
					isLiked={true}
				/>
			</div>
			<Footer />
		</>
	);
};
export default Blogs;
