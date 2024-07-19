import { faqList } from "../../constants/faq.list.js";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "../ui/accordion.jsx";

const Faqs = () => {
	return (
		<div className="flex flex-col items-center gap-12 p-8 sm:p-16 bg-white">
			<h4 className="text-center text-3xl sm:text-4xl text-gray-900">
				Frequently Asked Questions
			</h4>

			<Accordion
				className="w-full md:w-4/5 xl:w-3/5"
				type="single"
				collapsible
			>
				{faqList.map((faq, index) => (
					<AccordionItem className="justify-start" value={index + 1} key={index}>
						<AccordionTrigger className="font-semibold">{faq.ques}</AccordionTrigger>
						<AccordionContent>{faq.ans}</AccordionContent>
					</AccordionItem>
				))}
			</Accordion>
		</div>
	);
};
export default Faqs;
