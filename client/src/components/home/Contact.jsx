const Contact = () => {
	return (
		<div className="flex flex-col gap-8 p-8 sm:p-16 items-center justify-center">
			<div className="text-center">
				<h2 className="text-3xl sm:text-4xl">Ask Me</h2>
				<h6 className="sm:text-lg">Send Your Request</h6>
			</div>
			<form className="flex flex-col gap-4 w-full md:w-4/5 xl:w-3/5">
				<div className="flex flex-wrap gap-4">
					<input
						type="text"
						placeholder="Your Name"
						className="flex-1 h-14 rounded p-4 outline-none border border-gray-400 hover:border-gray-950 focus:border-emerald-900 focus:border-2 bg-transparent"
					/>
					<input
						type="text"
						placeholder="Your Email"
						className="flex-1 h-14 rounded p-4 outline-none border border-gray-400 hover:border-gray-950 focus:border-emerald-900 focus:border-2 bg-transparent"
					/>
					<input
						type="text"
						placeholder="Your Address"
						className="flex-1 h-14 rounded p-4 outline-none border border-gray-400 hover:border-gray-950 focus:border-emerald-900 focus:border-2 bg-transparent"
					/>
				</div>

				<textarea
					rows={6}
					placeholder="Your Message"
					className="flex-1 w-full rounded p-4 outline-none border border-gray-400 hover:border-gray-950 focus:border-emerald-900 focus:border-2 bg-transparent"
				/>

				<button
					onClick={(e) => e.preventDefault()}
					className="px-4 py-3 bg-primary hover:bg-primaryhover hover:shadow-xl text-gray-200 rounded-md text-sm mt-2"
				>
					SEND MESSAGE
				</button>
			</form>
		</div>
	);
};
export default Contact;
