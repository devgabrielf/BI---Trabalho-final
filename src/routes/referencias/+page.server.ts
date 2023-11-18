import { readCSV } from "$lib/functions/readCSV";

import type { PageServerLoad } from "./$types";

export const load = (() => ({
	rows: readCSV(),
})) satisfies PageServerLoad;
