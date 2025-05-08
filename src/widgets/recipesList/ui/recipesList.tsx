'use client'

import { RecipeCard } from '@/entities/recipe'
import { IRecipe } from '@/entities/recipe/types'
import { createClient } from 'contentful'
import { useEffect, useState } from 'react'

const RecipesList = () => {
	const [recipes, setRecipes] = useState<IRecipe[]>([])

	async function getItems() {
		// >> TODO: DECOMPOSE
		const client = createClient({
			space: process.env.CONTENTFUL_SPACE_ID || '',
			accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
		})

		const res = await client.getEntries({
			content_type: 'recipe',
		})
		// <<

		console.log(res.items)
		setRecipes(res.items as unknown as IRecipe[])
	}

	useEffect(() => {
		getItems()
	}, [])

	return (
		<div className='grid grid-cols-3 space-y-4 space-x-6'>
			{recipes.map((recipe) => (
				<RecipeCard key={recipe.sys.id} recipe={recipe} />
			))}
		</div>
	)
}

export default RecipesList
