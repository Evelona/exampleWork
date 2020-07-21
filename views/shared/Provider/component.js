import data from './data.cson'

export const ContentContext = React.createContext({})
const ContentContextProvider = ContentContext.Provider
const Provider = ({ children }) => {
	return pug`
		ContentContextProvider(value=${data})
			=children
	`
}

export default Provider