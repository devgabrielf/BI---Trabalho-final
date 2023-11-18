import csv from "csv-parser";
import fs from "node:fs";

type CSVRow = Record<string, string>;

export const readCSV: () => Promise<CSVRow[]> = () => {
	return new Promise((resolve, reject) => {
		const results: CSVRow[] = [];

		fs.createReadStream("data.csv")
			.pipe(csv())
			.on("data", (data: CSVRow) => results.push(data))
			.on("end", () => {
				resolve(results);
			})
			.on("error", error => {
				reject(error);
			});
	});
};
