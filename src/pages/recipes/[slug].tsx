import { createClient } from 'contentful'
import { IRecipe } from '@/entities/recipe/types'
import { RecipeDetails } from '@/entities/recipe'

export const getServerSideProps = async ({
	params,
}: {
	params: { slug: string }
}) => {
	console.log('SLUG IS:', params.slug)
	const client = createClient({
		space: process.env.CONTENTFUL_SPACE_ID || '',
		accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
	})

	const { items } = await client.getEntries({
		content_type: 'recipe',
	})
	const recipe = items.find((item) => item.fields.slug === params.slug)

	if (!recipe) {
		return {
			notFound: true,
		}
	}

	return { props: { recipe } }
}

const RecipePage = ({ recipe }: { recipe: IRecipe }) => {
	return (
		<div>
			<RecipeDetails recipe={recipe} />
		</div>
	)
}

export default RecipePage
