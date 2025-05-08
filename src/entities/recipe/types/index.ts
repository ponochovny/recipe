/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IRecipe {
	fields: {
		title: string
		cookingTime: string
		slug: string
		thumbnail: any
		ingredients: string[]
		method: any
	}
	sys: { id: string }
}
