import { AnchorWraapper, Label, Separator, Wrapper } from './style'

import { ContentContext } from 'Provider'
import Dots from '../Dots'
import { Multilang } from 'langs'
import { useContext } from 'react'

const Anchor = ({ label, setCurrAnchor, anchorName, isCurrent }) => {
	const setAnchorId = () => {
		setCurrAnchor(anchorName)
	}

	return pug`
		AnchorWraapper.Anchor
			Dots#Dots(isCurrent=isCurrent)
			Label(onClick=setAnchorId)
				Multilang(...label)
			Separator
	`
}

const Anchors = ({ category, setCurrAnchor, currAnchor }) => {
	const data = useContext(ContentContext)
	const { information } = data[category]

	const getAnchors = information.map((anchorItem, index) => {
		const anchorName = `${category}-${index + 1}`
		const isCurrent = currAnchor === anchorName

		return pug`
			Anchor(
				key=index
				label=anchorItem.anchor
				setCurrAnchor=setCurrAnchor
				isCurrent=isCurrent
				anchorName=anchorName
				currAnchor=currAnchor
			)
		`
	})

	return pug`
		Wrapper#Anchors
			=getAnchors
	`
}

export default Anchors