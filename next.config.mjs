import { config as dotenv } from 'dotenv';

// @ts-check

/** @type {import("next").NextConfig} */
const config = {
	env: dotenv().parsed,
	output: "export",
	images: {
		unoptimized: true,
	},
};

export default config;
