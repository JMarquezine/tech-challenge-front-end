import { Box, Typography } from '@material-ui/core'
import React from 'react'
import Chevron from '../../../../components/Chevron'
import useStyle from './style'
import { ReactComponent as EllipseCredit } from '../../../../svg/EllipseCredit.svg'
import CreditCard from '../CreditCard'

const PaymentCredit: React.FC = () => {
	const classes = useStyle()

	return (
		<>
			<Box className={classes.root}>
				<Box>
					<Typography className={classes.changePayment}>
						<Chevron position="left" /> Alterar forma de Pagamento
					</Typography>
				</Box>
				<Box
					className={classes.addNewCreditCard}
					display="inline-flex"
					alignItems="center"
					justifyContent="space-between"
					width="100%"
				>
					<EllipseCredit />
					<Typography className={classes.addNewCreditCardText}>
						Adicione um novo cartão de crédito
					</Typography>
				</Box>
				<CreditCard />
			</Box>
		</>
	)
}

export default PaymentCredit
