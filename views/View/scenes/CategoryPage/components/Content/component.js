import { Multilang, useLangs } from 'langs'
import { SectionWrapper, Text, Title, Wrap, Wrapper } from './style'
import { useContext, useRef } from 'react'

import { ContentContext } from 'Provider'
import marked from 'marked'
import { useListener } from '../../hooks/useListener'
import { withRouter } from 'react-router-dom'

const Section = ({ label, category, index }) => {
	const [lang] = useLangs()
	const { anchor, text } = label
	const id = `${category}-${index + 1}`

	return pug`
		SectionWrapper.section
			Title(id=id)
				Multilang(...anchor)
			Text(dangerouslySetInnerHTML = ${{ __html: marked(text[lang]) }})
	`
}

const Content = (props) => {
	const { setUserScroll, setCurrAnchor } = props
	const category = props.match.params.type
	const data = useContext(ContentContext)
	const { information } = data[category]
	const scrollRef = useRef(null)

	const setters = {
		setCurrAnchor,
		setUserScroll
	}

	useListener(scrollRef, setters, category)

	const getSection = information.map((item, index) => pug`
			Section(
				key=index
				index=index
				label=item 
				category=category
			)
	`)

	return pug`
		Wrapper#Content
			Wrap#Wrap(ref=scrollRef)
				=getSection
	`
}

export default withRouter(Content)