import { FotoName, FotoText, Wrapper } from './style'

import { Multilang } from 'langs'

const FotoLabel = ({ currPhotoLabel }) => {
	const { name, text } = currPhotoLabel

	return pug`
		Wrapper
			FotoName.Fotolabel
				Multilang(...name)
			FotoText
				Multilang(...text)
	`
}

export default FotoLabel