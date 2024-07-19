import { useNavigate, useParams } from "react-router-dom";
import { careList } from "../constants/nutritionalcare.list";
import { useEffect } from "react";
import Footer from "../components/Footer";

const CarePage = () => {
	const navigate = useNavigate();

	const { page } = useParams();
	const carePage = careList.find((item) => item.route.endsWith(page));

	useEffect(() => {
		if (!carePage) navigate("/nutritionalcare");
	}, [carePage]);

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
						<h1 className="text-5xl sm:text-6xl font-oduda tracking-wide break-words">
							{carePage?.title}
						</h1>
						<p>
							Losing weight is a mind game. Change your mind,
							change your body.â€ People often think that starving
							themselves is the best way to lose weight. But by
							starving themselves they are losing their body and
							not weight. It is easy to lose Kilos, but the
							nutrients once lost can take months or sometimes
							even years to replenish. The aim is not weight loss
							but gaining appropriate nutrition. <br />
							<br /> In order to lose weight it is important to
							understand the factors that cause obesity or
							over-weight, which are as follows: It could be
							because of genes, metabolism, behaviour pattern,
							culture and socio-economic status It can be caused
							by energy imbalance which involves eating too many
							calories and not doing enough physical activity.
							Environment and behaviour are also the important
							factors causing obesity
							<br />
							<br />
							As a dietitian, it is important to understand what
							is causing weight gain in an individual as every
							body type is different and so are the needs.
							Dietitian Garima keeps in consideration all the
							factors including your daily routine and eating
							habits making a diet plan that suits you the best.
							<br />
							<br />
							The diet plans are customized according to every
							individual and ensure that the weight loss is not
							temporary but is a lifestyle that you adopt for a
							healthy living. Get a nutritious diet plan to fit in
							your lifestyle and live in style. <br />
							<br />
							She also offers you Detox plans. Detox plans aim at
							facilitating toxin removal and also promote weight
							loss.
						</p>
					</div>
				</div>
			</div>

			<Footer />
		</>
	);
};
export default CarePage;
