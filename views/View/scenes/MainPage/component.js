import Button from './components/Button'
import { Emblem } from './style'
import Page from 'Page'
import Title from 'Title'

export default () => {
	return pug`
		Page(page='main')
			Emblem#emblem
			Title(yPosition=747 xPosition=476)
			Button
	`
}