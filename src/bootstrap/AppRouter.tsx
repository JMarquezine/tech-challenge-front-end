import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import PaymentRoute from '../route/PaymentRoute'

const AppRouter: React.FC = () => {
	return (
		<Router>
			<Switch>
				<Route path="/" component={PaymentRoute} />
			</Switch>
		</Router>
	)
}

export default AppRouter
