/* eslint-disable max-nested-callbacks */
import { DURATION } from 'config'
import { useEffect } from 'react'

export const useListener = (
	scrollRef,
	{ setUserScroll, setCurrAnchor },
	category
) => {
	const windowHeight = window.innerHeight

	useEffect(() => {
		const wrapper = scrollRef.current
		const arrSectionsContent = Array.from(document.getElementsByClassName('section'))
		const arrOfAnchorsTopPosition = []

		arrSectionsContent.forEach(section => {
			arrOfAnchorsTopPosition.push(section.getBoundingClientRect().top)
		})

		const anchorCount = arrOfAnchorsTopPosition.length
		let timer = null

		const setCurrAnchorInTable = () => {
			arrSectionsContent.some((section, index) => {
				const sectionPosition = section.getBoundingClientRect()
				const offsetTop = sectionPosition.top
				let height = 0

				if (sectionPosition.height >= windowHeight) {
					height = sectionPosition.height - windowHeight / 2
				}

				if ((offsetTop + height) > 0) {
					setCurrAnchor(`${category}-${index + 1}`)

					return true
				}

				return false
			})
		}

		wrapper.addEventListener('scroll', () => {
			/*Блокировка изменения якорей при скролле контента*/

			setUserScroll.setTrue()
			const { scrollHeight, scrollTop, clientHeight } = wrapper

			if (timer !== null) {
				clearTimeout(timer)
			}

			timer = setTimeout(() => {
				if ((scrollHeight - clientHeight - scrollTop) <= 0) setCurrAnchor(`${category}-${anchorCount}`) /*Условие проверки на последний якорь*/
				else setCurrAnchorInTable()

				setUserScroll.setFalse() /*Разблокировка изменения якорей*/
			}, DURATION.NORMAL)
		}, false)
	}, [])
}