export const parseDate = (date) => {
	const months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];

	const dateSuffix = { 1: "st", 2: "nd", 3: "rd" };

	let day = date.getDate();
	day = day + dateSuffix[day % 10] || day + "th";
	const month = months[date.getMonth()];
	const year = date.getFullYear();

	const dateString = month + " " + day + ", " + year;

	return dateString;
};
