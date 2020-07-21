import Bar from './components/Bar'
import Page from 'Page'
import Title from 'Title'

export default ({ setCategory }) => {
	return pug`
		Page
			Title(yPosition=86 xPosition=476)
			Bar(setCategory=setCategory)
	`
}