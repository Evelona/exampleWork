import { Dot, Wrapper } from './style'

const Dots = ({ isCurrent }) => {
	return pug`
		Wrapper(isCurrent=isCurrent)
			Dot(direction='left')
			Dot(direction='right')
	`
}

export default Dots