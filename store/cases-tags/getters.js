export default {
	casesTags: ({ casesTags }) => casesTags,
	cardTags: ({ casesTags }) => (ids) => {
		const results = [];
		casesTags.forEach((casesTag) => {
			if (ids.includes(casesTag.id)) results.push(casesTag);
		});
		return results;
	},
}
