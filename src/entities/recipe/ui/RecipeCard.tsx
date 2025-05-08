import Image from 'next/image'
import Link from 'next/link'
import { IRecipe } from '../types'

const RecipeCard = ({ recipe }: { recipe: IRecipe }) => {
	const { title, slug, cookingTime, thumbnail } = recipe.fields

	return (
		<div>
			<div className='relative h-40'>
				<Image
					src={'https:' + thumbnail.fields.file.url}
					alt='preview image'
					fill
					className='object-cover rounded-md'
					// width={thumbnail.fields.file.details.image.width}
					// height={thumbnail.fields.file.details.image.height}
				/>
			</div>
			<div>
				<div className='mb-2'>
					<h4 className='font-bold p-2 bg-white inline-block -top-4 relative -rotate-1 shadow-md -left-1'>
						{title}
					</h4>
					<p className='text-md'>Takes approx {cookingTime} mins to make</p>
				</div>
				<div>
					<Link
						href={`/recipes/${slug}`}
						className='p-2 bg-yellow-100 font-bold text-sm hover:bg-yellow-100/80'
					>
						View
					</Link>
				</div>
			</div>
		</div>
	)
}

export default RecipeCard
