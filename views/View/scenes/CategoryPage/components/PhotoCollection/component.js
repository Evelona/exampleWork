import { Bar, Photo, Wrapper } from './style'

import { ContentContext } from 'Provider'
import { useContext } from 'react'
import { withRouter } from 'react-router-dom'

const PhotoCollection = (props) => {
	const { setIndexPhoto, openViewer } = props
	const category = props.match.params.type
	const data = useContext(ContentContext)
	const getPhotos = () => {
		return data[category].images.map((pathObj, index) => {
			const path = `./statics/${pathObj.path}`
			const handler = () => {
				setIndexPhoto(index)
				openViewer()
			}

			return pug`
				Photo.photo(
					key=index
					src=path
					path=path
					onClick=handler
				)
			`
		})
	}

	return pug`
		Wrapper
			Bar
				=getPhotos()
	`
}

export default withRouter(PhotoCollection)