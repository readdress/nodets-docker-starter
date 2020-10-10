/* eslint-disable no-undef */
module.exports = {
	preset: "ts-jest",
	clearMocks: true,
	coverageDirectory: "coverage",
	testEnvironment: "node",
	moduleFileExtensions: [
		"ts",
		"tsx",
		"js",
		"jsx",
		"json",
		"node",
	],
	setupFilesAfterEnv: [
		"./jest.setup.ts"
	],
	roots: [
		"<rootDir>/src"
	],
	testMatch: [
		"**/__tests__/**/*.+(ts|tsx|js)",
		"**/?(*.)+(spec|test).+(ts|tsx|js)"
	],
	transform: {
		"^.+\\.(ts|tsx)$": "ts-jest"
	},
};
