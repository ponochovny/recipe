import { IRecipe } from '@/entities/recipe/types'
import { RecipeList } from '@/widgets/recipesList'
import { createClient } from 'contentful'

export const getServerSideProps = async () => {
	const client = createClient({
		space: process.env.CONTENTFUL_SPACE_ID || '',
		accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
	})

	const { items: recipes } = await client.getEntries({
		content_type: 'recipe',
	})

	if (!recipes) {
		return {
			notFound: true,
		}
	}

	return { props: { recipes } }
}

const Home = ({ recipes }: { recipes: IRecipe[] }) => {
	return (
		<div>
			<RecipeList recipes={recipes} />
		</div>
	)
}

export default Home
