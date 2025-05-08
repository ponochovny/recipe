import Image from 'next/image'
import { IRecipe } from '../types'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import styles from './styles.module.css'

const RecipeDetails = ({ recipe }: { recipe: IRecipe }) => {
	const { title, cookingTime, ingredients, method } = recipe.fields

	return (
		<div className='w-full max-w-[1200px] mx-auto'>
			<div className='relative w-full h-80'>
				<Image
					fill
					src={'https:' + recipe.fields.thumbnail.fields.file.url}
					alt='preview image'
					className='object-cover rounded-md'
				/>
			</div>
			<h2 className='text-3xl font-bold relative bg-white p-4 -top-8 -left-2 inline-block shadow-md -rotate-1'>
				{title}
			</h2>

			<div className='flex flex-col gap-2'>
				<p>Take about {cookingTime} mins to cook.</p>
				<h3 className='text-2xl font-bold'>Ingredients:</h3>

				<div>
					{ingredients.map((ing, i) => (
						<span key={ing}>
							{ing}
							{i + 1 === ingredients.length ? '' : ', '}
						</span>
					))}
				</div>

				<div className={styles.methods}>
					{documentToReactComponents(method)}
				</div>
			</div>
		</div>
	)
}

export default RecipeDetails
