import Link from 'next/link'

const RecipeCard = ({
	recipe,
}: {
	recipe: {
		fields: { title: string; cookingTime: string }
		sys: { id: string }
	}
}) => {
	return (
		<div>
			<div>{/* img */}</div>
			<div>
				<div>
					<h4 className='font-bold'>{recipe.fields.title}</h4>
					<p>Takes approx {recipe.fields.cookingTime} mins to make</p>
				</div>
				<div>
					<Link href={`/recipes/${recipe.sys.id}`}>View</Link>
				</div>
			</div>
		</div>
	)
}

export default RecipeCard
