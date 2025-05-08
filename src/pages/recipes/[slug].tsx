'use client'

import { useRouter } from 'next/router'

import { createClient } from 'contentful'
import { useCallback, useEffect, useState } from 'react'
import { IRecipe } from '@/entities/recipe/types'
import { RecipeDetails } from '@/entities/recipe'

const RecipePage = () => {
	const [recipe, setRecipe] = useState<null | IRecipe>(null)
	const router = useRouter()

	const client = createClient({
		space: process.env.CONTENTFUL_SPACE_ID || '',
		accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
	})

	console.log(client)

	const fetchItems = useCallback(
		async function () {
			const { items } = await client.getEntries({
				content_type: 'recipe',
			})

			const recipe = items.find(
				(item) => item.fields.slug === router.query.slug
			)

			setRecipe(recipe as unknown as IRecipe)
		},
		[client, router.query.slug]
	)

	useEffect(() => {
		if (router.query.slug) {
			fetchItems()
		}
	}, [router.query.slug])

	if (!recipe) return null

	return (
		<div>
			<RecipeDetails recipe={recipe} />
		</div>
	)
}

export default RecipePage
