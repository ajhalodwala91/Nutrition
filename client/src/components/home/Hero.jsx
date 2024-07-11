const Hero = () => {
	return (
		<div className="flex justify-end w-screen h-screen bg-hero-image bg-cover p-4">
			<div className="flex flex-col gap-6 shadow-4xl py-12 px-10 sm:px-20 rounded-2xl bg-[#ffffffaa] xl:bg-[#ffffff33] absolute max-w-[600px] lg:right-48 right-[50%] top-[50%] translate-x-[50%] lg:-translate-x-0 -translate-y-[40%] sm:-translate-y-[50%]">
				<div className="flex flex-col gap-3">
					<p className="text-center text-emerald-900 leading-snug text-5xl font-montserrat font-medium sm:text-nowrap">
						Purely Nutritious
					</p>
					<p className="text-center text-2xl">
						Join me in a healthy lifestyle..!
					</p>
				</div>

				<p className="text-lg">
					"If we could give every individual the right amount of
					nourishment and exercise, not too little and not too much,
					we would have the safest way to health." – Hippocrates.
				</p>
			</div>
		</div>
	);
};
export default Hero;
