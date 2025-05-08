import { useRouter } from 'next/router'

const RecipePage = () => {
	const router = useRouter()

	return <div>Recipe: {router.query.slug}</div>
}

export default RecipePage
