export default {
	cases: ({ cases }) => cases,
	caseBySlug: ({cases}) => (slug) => {
		return cases.filter(item => item.slug === slug)[0]
	}
}
