import cssIcon from "$assets/css.svg";
import csvIcon from "$assets/csv.svg";
import htmlIcon from "$assets/html.svg";
import jsIcon from "$assets/js.svg";

export type PageType = {
	route: string;
	label: string;
	icon: string;
};

export const pages: PageType[] = [
	{
		route: "/",
		label: "inicio.html",
		icon: htmlIcon,
	},
	{
		route: "/dados",
		label: "dados.csv",
		icon: csvIcon,
	},
	{
		route: "/referencias",
		label: "referencias.css",
		icon: cssIcon,
	},
	{
		route: "/geobi",
		label: "geobi.js",
		icon: jsIcon,
	},
	{
		route: "/powerbi",
		label: "powerbi.js",
		icon: jsIcon,
	},
];
