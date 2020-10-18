import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

const AppRouter: React.FC = () => {
	return (
		<Router>
			<Switch>
				<Route path="/">
					<div>Test</div>
				</Route>
			</Switch>
		</Router>
	)
}

export default AppRouter
