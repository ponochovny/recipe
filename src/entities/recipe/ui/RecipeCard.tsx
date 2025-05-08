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
			<div className='bg-white relative -left-1 -top-2 shadow-md'>
				<div className='mb-2 p-2'>
					<h4 className='font-bold text-xl'>{title}</h4>
					<p className='text-md text-gray-500'>
						Takes approx {cookingTime} mins to make
					</p>
				</div>
				<div className='text-right'>
					<Link
						href={`/recipes/${slug}`}
						className='inline-block py-3 px-5 bg-rose-600 text-white hover:bg-rose-500/80'
					>
						Cook this
					</Link>
				</div>
			</div>
		</div>
	)
}

export default RecipeCard
