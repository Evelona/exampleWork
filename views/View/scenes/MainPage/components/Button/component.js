/* eslint-disable no-unused-vars */
import { Label, Wrapper } from './style'

import { Link } from 'react-router-dom'
import { Multilang } from 'langs'
import { usePress } from 'gesture'
import { useState } from 'react'

const start = {
	eng: 'Start',
	rus: 'Начать',
	tat: 'Җибәрү'
}

const Button = () => {
	const [pressed, setPressed] = useState(false)
	const bind = usePress({
		down: () => setPressed(true),
		tap: () => {},
		up: () => setPressed(false)
	})

	const sizeStyle = {
		transform: `scale(${pressed ? '0.85' : '1'})`,
		transition: 'transform ease 300ms'
	}

	return pug`
		
			Wrapper(
				...bind()
				style=${sizeStyle}
			)
				Link(to='/menu')
					Label
						Multilang(...start)
	`
}

export default Button