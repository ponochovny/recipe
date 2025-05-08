import { RecipeCard } from '@/entities/recipe'
import { IRecipe } from '@/entities/recipe/types'

const RecipesList = ({ recipes }: { recipes: IRecipe[] }) => {
	return (
		<div className='grid grid-cols-3 space-y-4 space-x-6 px-4'>
			{recipes.map((recipe) => (
				<RecipeCard key={recipe.sys.id} recipe={recipe} />
			))}
		</div>
	)
}

export default RecipesList
