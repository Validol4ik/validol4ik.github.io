import cases from "../mock/cases";

export default {
	fillCasesStore: async ({commit}) => {
		const response = await fetch('db/cases/cases.json')

		const cases = await response.json()
		if (cases) {
			commit('updateCases', cases)
		}
	},
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
			commit("updateCases", newCases);
		} else commit("updateCases", cases);
	},
}
