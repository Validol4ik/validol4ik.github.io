export default {
	cases: ({ cases }) => cases,
	caseSingle: ({ cases }) => (slug) => cases.find((caseSingle) => caseSingle.slug === slug)
}
