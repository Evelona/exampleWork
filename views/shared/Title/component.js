import { Multilang } from 'langs'
import { StyledHeading } from './style'

const label = {
	eng: 'Kazan Voivodeship in the XVI- XVII c.',
	rus: 'Казанское воеводство в XVI-XVII вв.',
	tat: 'Казан воеводалыгы XVI-XVII й.'
}

const Title = ({ xPosition, yPosition }) => {
	return pug`
		StyledHeading(x=xPosition, y=yPosition)
			Multilang(...label)
	`
}

export default Title