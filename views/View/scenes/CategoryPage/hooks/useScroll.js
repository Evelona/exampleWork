import { ANCHOR_CONTENT_PADDING } from 'config'
import { useEffect } from 'react'

export const useScroll = (currAnchor, isUserScroll) => {
	const anchors = Array.from(document.getElementsByClassName('Anchor'))

	useEffect(() => {
		if (currAnchor && !isUserScroll) {
			const textContent = document.getElementById('Wrap')
			const anchorNode = document.getElementById(currAnchor)

			textContent.scrollTo({
				top: anchorNode.offsetTop - ANCHOR_CONTENT_PADDING
			})
		}

		if (currAnchor && isUserScroll) {
			const anchorIndex = currAnchor[currAnchor.length - 1] - 1

			anchors[anchorIndex].scrollIntoView(true)
		}
	}, [currAnchor])
}
