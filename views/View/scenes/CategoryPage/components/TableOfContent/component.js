import { CategoryTitle, Wrapper } from './style'

import Anchors from '../Anchors'
import { ContentContext } from 'Provider'
import { Multilang } from 'langs'
import { useContext } from 'react'
import { withRouter } from 'react-router-dom'

const TableOfContent = (props) => {
	const { setCurrAnchor, currAnchor } = props
	const category = props.match.params.type
	const data = useContext(ContentContext)
	const { title } = data[category]

	return pug`
		Wrapper#TableOfContent
			CategoryTitle
				Multilang(...title)
			Anchors(category=category setCurrAnchor=setCurrAnchor currAnchor=currAnchor)
	`
}

export default withRouter(TableOfContent)