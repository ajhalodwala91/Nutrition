import { useState } from "react";
import { MdError } from "react-icons/md";
import bmiCalculator from "../../assets/images/bmi-calculator.png";

const Calculator = () => {
	const [inputs, setInputs] = useState({ height: "", weight: "" });
	const [errors, setErrors] = useState({});
	const [styles, setStyles] = useState("");
	const [result, setResult] = useState("");
	const [isCalculated, setIsCalculated] = useState(false);

	const handleCalculate = (e) => {
		e.preventDefault();
		setErrors({});

		if (!inputs.height) {
			setErrors({ height: "Height is required" });
			return;
		}
		if (!inputs.weight) {
			setErrors({ weight: "Weight is required" });
			return;
		}

		const height = parseFloat(inputs.height);
		const weight = parseFloat(inputs.weight);

		if (!isNaN(height) && !isNaN(weight)) {
			const bmi = weight / ((height / 100) * (height / 100));
			styleResult(bmi.toFixed(2));
		}

		setIsCalculated(true);
	};

	const styleResult = (value) => {
		if (value < 18.5) {
			setResult(`Underweight - ${value}`);
			setStyles("text-gray-500");
		} else if (value >= 18.5 && value < 24.9) {
			setResult(`Normal Weight - ${value}`);
			setStyles("text-primary");
		} else if (value > 25 && value < 29.9) {
			setResult(`Overweight - ${value}`);
			setStyles("text-yellow-500");
		} else if (value > 30) {
			setResult(`Obese - ${value}`);
			setStyles("text-red-600");
		}
	};

	const handleReset = (e) => {
		e.preventDefault();
		setInputs(false);
		setIsCalculated(false);
	};

	return (
		<div className="flex p-8 sm:p-16 w-screen justify-center items-center gap-20 h-[550px]">
			<div className="hidden lg:block">
				<img src={bmiCalculator} alt="BMI Calculator" />
			</div>

			<form className="flex flex-col p-8 gap-3 bg-gray-50 rounded-xl w-[500px] shadow-2xl">
				<h6 className="text-xl">Calculate Your BMI</h6>
				<p>
					Body mass index. A measure that relates body weight to
					height.
				</p>

				{isCalculated ? (
					<>
						<h6 className={`text-xl ${styles}`}>{result}</h6>
						<div>
							<p className="text-lg font-semibold">
								BMI Categories:
							</p>
							<p>
								Underweight = &gt;18.5
								<br />
								Normal weight = 18.5 – 24.9
								<br />
								Overweight = 25 – 29.9
								<br />
								Obesity = BMI of 30 or greater
							</p>
						</div>

						<button
							onClick={handleReset}
							className="w-fit px-4 py-3 bg-primary text-gray-200 rounded-lg text-sm mt-2"
						>
							RESET
						</button>
					</>
				) : (
					<>
						<label htmlFor="height">Height (cm)</label>
						<input
							value={inputs.height}
							onChange={(e) =>
								setInputs({ ...inputs, height: e.target.value })
							}
							type="text"
							id="height"
							className="h-14 rounded-lg p-4 outline-none border border-gray-300 hover:border-gray-900 focus:border-emerald-900 focus:border-2 bg-transparent"
						/>
						{errors.height && (
							<div className=" flex items-center gap-1 text-red-800 text-sm">
								<MdError />
								<p> {errors.height}</p>
							</div>
						)}

						<label htmlFor="weight">Weight (kg)</label>
						<input
							value={inputs.weight}
							onChange={(e) =>
								setInputs({ ...inputs, weight: e.target.value })
							}
							type="text"
							id="weight"
							className="h-14 rounded-lg p-4 outline-none border border-gray-300 hover:border-gray-900 focus:border-emerald-900 focus:border-2 bg-transparent"
						/>
						{errors.weight && (
							<div className=" flex items-center gap-1 text-red-800 text-sm">
								<MdError />
								<p> {errors.weight}</p>
							</div>
						)}

						<button
							onClick={handleCalculate}
							className="w-fit px-4 py-3 bg-primary text-gray-200 rounded-lg text-sm mt-2"
						>
							CALCULATE
						</button>
					</>
				)}
			</form>
		</div>
	);
};
export default Calculator;
