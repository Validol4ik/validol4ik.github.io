export default {
	cases: ({ cases }) => cases,
	caseSingle: ({ cases }) => (id) => {
		const caseById = cases.find((caseSingle) => caseSingle.id == id);
		return caseById;
	},
}
