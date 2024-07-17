import aboutUs from "../assets/images/photo.jpg";
import Footer from "../components/Footer";

const About = () => {
	return (
		<>
			<div className="flex p-8 md:py-20 md:px-32 bg-gray-200 min-h-screen">
				<div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-16 md:mt-16 mt-24">
					{/* <img className="rounded-3xl" src={aboutUs} alt="About" /> */}
					<div className="flex flex-col gap-6 text-center md:text-left">
						<h1 className="text-5xl sm:text-6xl md:text-7xl text-primary font-semibold font-oduda">
							About Us
						</h1>
						<p className="sm:text-lg font-semibold text-gray-900">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Odit repellat asperiores quam aliquid
							inventore minus facere harum! Recusandae magnam
							dolore eligendi exercitationem quod corporis quia.
							Ex iste aliquid quos blanditiis. Dolorem delectus
							porro, maxime aliquam iusto totam adipisci at in
							nulla dolorum, quibusdam illo? Laboriosam,
							consequatur saepe? Odio consequuntur quidem
							veritatis, vero, expedita esse architecto veniam
							numquam amet adipisci facilis.
						</p>
					</div>
				</div>
			</div>
			
			<Footer />
		</>
	);
};
export default About;
