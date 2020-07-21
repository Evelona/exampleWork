import Category from '../Category'
import { ContentContext } from 'Provider'
import { Wrapper } from './style'
import { map } from 'lodash'
import { useContext } from 'react'

const getCategory = ({ category }, index) => pug`
	Category.category(
		type=category
		key=index
	)
`

const Bar = () => {
	const data = useContext(ContentContext)

	const getPagesCategory = () => map(data, getCategory)

	return pug`
		Wrapper#Bar
			=getPagesCategory()
	`
}

export default Bar