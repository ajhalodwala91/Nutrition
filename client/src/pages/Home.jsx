import Hero from "../components/home/Hero.jsx";
import HotLinks from "../components/home/HotLinks.jsx";
import QuickLinks from "../components/home/QuickLinks.jsx";
import Calculator from "../components/home/Calculator.jsx";
import Faqs from "../components/home/Faqs.jsx";
import Contact from "../components/home/Contact.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
	return (
		<div className="bg-gray-200">
			<Hero />
			<HotLinks />
			<QuickLinks />
			<Calculator />
			<Faqs />
			<Contact />
			<Footer />
		</div>
	);
};
export default Home;
