import cases from "../mock/cases";

export default {
	fetchCases: ({ commit }, tagsIds) => {
		if (tagsIds.length > 0) {
			const newCases = [];
			for (let i = 0; i < cases.length; i++) {
				const caseTags = cases[i].tags;
				for (let j = 0; j < caseTags.length; j++) {
					if (tagsIds.includes(caseTags[j])) {
						newCases.push(cases[i]);
						break;
					}
				}
			}
			commit("changeCases", newCases);
		} else commit("changeCases", cases);
	},
}
