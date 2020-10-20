import React, { Suspense, ReactElement } from 'react'
import {
	CssBaseline,
	StylesProvider,
	createGenerateClassName,
	ThemeProvider,
} from '@material-ui/core'
import AppRouter from './AppRouter'
import theme from '../theme'

class App extends React.Component {
	public render(): ReactElement {
		const generateClassName = createGenerateClassName({
			productionPrefix: 'bexs-front-end-exam',
			seed: 'bexs-front-end-exam',
		})
		return (
			<Suspense fallback={null}>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<StylesProvider generateClassName={generateClassName}>
						<AppRouter />
					</StylesProvider>
				</ThemeProvider>
			</Suspense>
		)
	}
}
export default App
