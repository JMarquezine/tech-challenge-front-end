import { Box, Grid, Typography } from '@material-ui/core'
import React from 'react'
import PaymentForm from './Components/PaymentForm'
import PaymentPath from './Components/PaymentPath'
import useStyle from './PaymentStyle'

const Payment: React.FC = () => {
	const classes = useStyle()
	return (
		<Grid container item className={classes.root}>
			<Grid item md={3} className={classes.firstGrid}>
				<Box style={{ paddingTop: '59px' }}>
					<Typography>&lt; Alterar forma de Pagamento</Typography>
				</Box>
			</Grid>
			<Grid item md={9} className={classes.secondGrid}>
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
