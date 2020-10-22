import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import useStyle from './style'

const ToastNotification: React.FC = () => {
	const classes = useStyle()
	return (
		<ToastContainer
			position="top-right"
			autoClose={3000}
			hideProgressBar={false}
			newestOnTop={false}
			closeOnClick
			rtl={false}
			draggable
			bodyClassName={classes.bodyToast}
		/>
	)
}

export default ToastNotification
