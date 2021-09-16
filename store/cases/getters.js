export default {
	cases: ({ cases }) => cases,
	caseSingle: ({ cases }) => (slug) => {
		const caseById = cases.find((caseSingle) => caseSingle.slug === slug);
		return caseById;
	},
}
