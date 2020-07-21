import { RESET_DELAY } from 'config'
import { useEffect } from 'react'

export const useResetApp = (setPage) => {
	useEffect(() => {
		let timerId = setTimeout(() => {
			setPage('main')
		}, RESET_DELAY)

		const restartTimer = () => {
			clearTimeout(timerId)
			timerId = setTimeout(() => {
				setPage('main')
			}, RESET_DELAY)
		}

		document.body.addEventListener('touchstart', restartTimer)

		return () => document.body.removeEventListener('touchstart', restartTimer)
	}, [])
}