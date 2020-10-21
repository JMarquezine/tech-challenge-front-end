import { Box, Grid } from '@material-ui/core'
import React from 'react'
import PaymentCredit from './Components/PaymentCredit'
import PaymentForm from './Components/PaymentForm'
import PaymentPath from './Components/PaymentPath'
import useStyle from './PaymentStyle'

const Payment: React.FC = () => {
	const classes = useStyle()
	return (
		<Grid container item className={classes.root}>
			<Grid item md={4} className={classes.firstGrid}>
				<PaymentCredit />
			</Grid>
			<Grid item md={8} className={classes.secondGrid}>
				<Box className={classes.paymentFormRoot}>
					<PaymentPath />
					<Box>
						<PaymentForm />
					</Box>
				</Box>
			</Grid>
		</Grid>
	)
}

export default Payment
