import React, { Suspense, ReactElement } from 'react'
import {
	CssBaseline,
	StylesProvider,
	createGenerateClassName,
} from '@material-ui/core'
import AppRouter from './AppRouter'

class App extends React.Component {
	public render(): ReactElement {
		const generateClassName = createGenerateClassName({
			productionPrefix: 'bexs-front-end-exam',
			seed: 'bexs-front-end-exam',
		})
		return (
			<Suspense fallback={null}>
				<CssBaseline />
				<StylesProvider generateClassName={generateClassName}>
					<AppRouter />
				</StylesProvider>
			</Suspense>
		)
	}
}
export default App
