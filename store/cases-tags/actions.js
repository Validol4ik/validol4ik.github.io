export default {
	fillTagsStore: async ({commit}) => {
		const response = await fetch('/db/tags.json')

		const tags = await response.json()
		if (tags) {
			commit('updateTags', tags)
		}
	}
}
