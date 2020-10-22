import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import ToastNotification from '../components/ToastNotification'
import PaymentRoute from '../route/PaymentRoute'

const AppRouter: React.FC = () => {
	return (
		<Router>
			<ToastNotification />
			<Switch>
				<Route path="/" component={PaymentRoute} />
			</Switch>
		</Router>
	)
}

export default AppRouter
