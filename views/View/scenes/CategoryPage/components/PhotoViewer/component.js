import { ButtonNext, ButtonPrev, CloseButton, Photo, PhotoViewer } from './style'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { DISTANCE_FOR_SWIPE, DURATION, TIME_FOR_SWIPE } from 'config'
import { useContext, useState } from 'react'

import { ContentContext } from 'Provider'
import FotoLabel from '../FotoLabel'
import Pointer from 'pointer'

export default ({
	closeViewer,
	currentPhotoIndex,
	setCurrentPhotoIndex = () => {},
	controls,
	category,
	...props
}) => {
	const data = useContext(ContentContext)
	const { images } = data[category]
	const { length: photosLength } = images
	const [viewerPhotoIndex, setViewerPhotoIndex] = useState(currentPhotoIndex)
	const currPhotoLabel = images[viewerPhotoIndex].label
	const url = `./statics/${images[viewerPhotoIndex].path}`
	const [animDirection, setAnimDirection] = useState(null)
	const leftArrowBlocked = viewerPhotoIndex === 0
	const rightArrowBlocked = viewerPhotoIndex === photosLength - 1

	const goToNextPhoto = () => {
		if (viewerPhotoIndex < photosLength - 1) {
			setAnimDirection('left')
			setViewerPhotoIndex(viewerPhotoIndex + 1)
		}
	}

	const goToPrevPhoto = () => {
		if (viewerPhotoIndex >= 1) {
			setAnimDirection('right')
			setViewerPhotoIndex(viewerPhotoIndex - 1)
		}
	}

	const closePhotoViewer = () => {
		closeViewer()
		setCurrentPhotoIndex(viewerPhotoIndex)
	}

	const swipeImage = ({
		clientX, timeStamp,
		session: { startX, startTime }
	}) => {
		if (!controls) return null

		const timeDelta = timeStamp - startTime
		const deltaX = startX - clientX

		if (timeDelta < TIME_FOR_SWIPE && deltaX >= DISTANCE_FOR_SWIPE) {
			return goToNextPhoto()
		}

		if (timeDelta < TIME_FOR_SWIPE && deltaX <= -DISTANCE_FOR_SWIPE) {
			return goToPrevPhoto()
		}
	}

	return pug`
		Pointer(onPressUp=swipeImage)
			PhotoViewer
				TransitionGroup(component=null)
					CSSTransition(
						key=viewerPhotoIndex
						timeout=DURATION.NORMAL
					)
						Photo.photo(
							...props
							url=url
							animDirection=animDirection
						)
							FotoLabel(currPhotoLabel=currPhotoLabel)
				Pointer(onPressUp=closePhotoViewer)
					CloseButton
				if controls
					Pointer(onPressUp=goToPrevPhoto)
						ButtonPrev(blocked=leftArrowBlocked)
					Pointer(onPressUp=goToNextPhoto)
						ButtonNext(blocked=rightArrowBlocked)
	`
}