import { HashRouter, Route, Switch } from 'react-router-dom'

import CategoryPage from './scenes/CategoryPage'
import GlobalStyles from './style'
import MainPage from './scenes/MainPage'
import MenuPage from './scenes/MenuPage'
import Provider from 'Provider'
import { ThemeProvider } from 'styled-components'
import { hot } from 'react-hot-loader/root'
import { theme } from 'config'
import { useResetApp } from './hooks/useResetApp'
import { useState } from 'react'

let App = () => {
	const [category, setCategory] = useState(null)

	useResetApp()

	return pug`
		HashRouter
			GlobalStyles
			ThemeProvider(theme=theme)
				Provider
					Switch
						Route(
							exact
							path='/'
							component=MainPage
						)
						Route(
							exact
							path='/menu'
							render=${() => pug`
									MenuPage(setCategory=setCategory)
								`}
						)
						Route(
							path='/category/:type'
							component=CategoryPage
						)
				
				
	`
}

if (module.hot) {
	App = hot(App)
}

export default App