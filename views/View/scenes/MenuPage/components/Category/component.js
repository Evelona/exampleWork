/* eslint-disable no-unused-vars */
import { Label, Photo, Wrapper } from './style'

import { Link } from 'react-router-dom'
import { Multilang } from 'langs'
import { usePress } from 'gesture'
import { useState } from 'react'

const getLabel = {
	area: {
		eng: 'Territory\nand governance',
		rus: 'Территория\nи управление',
		tat: 'Территория\nһәм идарәчелек'
	},

	city: {
		eng: 'Cities\nand villages',
		rus: 'Города\nи поселения',
		tat: 'Шәһәрләр\nһәм авыллар'
	},

	population: {
		eng: 'Population',
		rus: 'Население',
		tat: 'Халкы'
	}

}

const Category = ({ type, setCategory }) => {
	const label = getLabel[type]

	const [pressed, setPressed] = useState(false)
	const bind = usePress({
		down: () => setPressed(true),
		up: () => {
			setPressed(false)
		}
	})

	const sizeStyle = {
		transform: `scale(${pressed ? '0.95' : '1'})`,
		transition: 'transform ease 300ms'
	}

	return pug`
		Wrapper(
			...bind()
			style=${sizeStyle}
		)
			Link(to=${`/category/${type}`})
				Photo#photo(type=type)
				Label
					Multilang(...label)

	`
}

export default Category