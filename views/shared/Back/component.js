/* eslint-disable no-unused-vars */
import { Icon, Text, Wrapper } from './style'

import { Link } from 'react-router-dom'
import { Multilang } from 'langs'
import { usePress } from 'gesture'
import { useState } from 'react'

const back = {
	eng: 'Back',
	rus: 'Назад',
	tat: 'Артка',
}

const Back = ({ setPage }) => {
	const [pressed, setPressed] = useState(false)
	const bind = usePress({
		down: () => setPressed(true),
		up: () => setPressed(false),
	})

	const sizeStyle = {
		transform: `scale(${pressed ? '0.9' : '1'})`,
		transition: 'transform ease 300ms'
	}

	return pug`
		Wrapper#Back(
			...bind()
			style=${sizeStyle}
		)
			Link(to='/menu')
				Text
					Multilang(list=back)
			Icon
	`
}

export default Back