import { IoIosArrowDown } from "react-icons/io";
import { faqList } from "../../constants/faqList.js";
import { useState } from "react";

const Faq = ({ index, isOpen, ques, ans, setOpenIndex }) => {
	return (
		<div
			className={`border overflow-hidden hover:border-gray-500 ${
				isOpen ? "border-gray-500" : "border-gray-200"
			} ${index === 0 && "rounded-t-lg"} ${
				index === faqList.length - 1 && "rounded-b-lg"
			}`}
		>
			<div
				className={`p-6 flex justify-between items-center cursor-pointer ${
					isOpen && "bg-gray-200 border-b border-gray-500"
				}`}
				onClick={() => setOpenIndex(isOpen ? -1 : index)}
			>
				<p className={isOpen ? "font-semibold" : "text-gray-700"}>
					{ques}
				</p>
				{<IoIosArrowDown />}
			</div>

			{isOpen && (
				<p className="px-6 py-4 text-gray-700 animate-append origin-[50%_0%]">
					{ans}
				</p>
			)}
		</div>
	);
};

const Faqs = () => {
	const [openIndex, setOpenIndex] = useState(-1);

	return (
		<div className="flex flex-col items-center gap-8 p-8 sm:p-16 bg-white">
			<h4 className="text-center text-3xl sm:text-4xl text-gray-900">
				Frequently Asked Questions
			</h4>

			<div className="w-full md:w-4/5 xl:w-3/5">
				{faqList.map((faq, index) => (
					<Faq
						key={index}
						index={index}
						isOpen={index === openIndex}
						ques={faq.ques}
						ans={faq.ans}
						setOpenIndex={setOpenIndex}
					/>
				))}
			</div>
		</div>
	);
};
export default Faqs;
