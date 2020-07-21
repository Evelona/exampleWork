import { CSSTransition, TransitionGroup } from 'react-transition-group'

import Content from './components/Content'
import { DURATION } from 'config'
import Page from 'Page'
import PhotoCollection from './components/PhotoCollection'
import PhotoViewer from './components/PhotoViewer'
import Provider from 'Provider'
import { Sections } from './style'
import TableOfContent from './components/TableOfContent'
import useBoolean from 'use-boolean'
import { useScroll } from './hooks/useScroll'
import { useState } from 'react'

export default (props) => {
	const category = props.match.params.type
	const [indexPhoto, setIndexPhoto] = useState(0)
	const [currAnchor, setCurrAnchor] = useState(`${category}-1`)
	const [isViewerOpened, openViewer, closeViewer] = useBoolean(false)
	const [isUserScroll, setTrue, setFalse] = useBoolean(false)

	const userScroll = {
		setFalse,
		setTrue
	}

	useScroll(currAnchor, isUserScroll)
	console.log(location)

	return pug`
		Page(page='category')
			Provider
				Sections#sections
					TableOfContent(
						setCurrAnchor=setCurrAnchor
						currAnchor=currAnchor
						)
					Content(
						currAnchor=currAnchor
						setUserScroll = userScroll
						setCurrAnchor=setCurrAnchor
						)
					PhotoCollection#PhotoCollecction(
						setIndexPhoto=setIndexPhoto
						openViewer=openViewer
						)
					TransitionGroup(component=null)
						if isViewerOpened
							CSSTransition(key=indexPhoto timeout=DURATION.NORMAL classNames='anim')
								PhotoViewer(
									key=indexPhoto
									setCurrentPhotoIndex=setIndexPhoto
									closeViewer=closeViewer
									currentPhotoIndex=indexPhoto
									controls=true
									photoWidth=1500
									category=category
									)
				
	`
}