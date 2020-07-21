import Alice from '../statics/fonts/Alice-Regular.ttf'
import Cuprum from '../statics/fonts/Cuprum-Regular.ttf'
import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
	@font-face {
		font-family: 'Alice';
		src: url(${Alice});
	}
	@font-face {
		font-family: 'Cuprum';
		src: url(${Cuprum});
	}

	html {
		font-family: Alice, sans-serif !important;
	}
	body {
		margin: 0;
	}
	a {
		text-decoration: none;
	}

	#app {
		width: 1920px !important;
		height: 1080px !important;
		/* position: relative !important;
		color: #575555;
		font-size: 36px; */
		overflow: hidden;
		user-select: none;
		position: relative;
	}

`