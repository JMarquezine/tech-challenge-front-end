import { Box } from '@material-ui/core'
import { useStoreMap } from 'effector-react'
import React from 'react'
import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'
import Payment from '../../../../domains/Payment'
import PaymentStore from '../../../../store/payment/PaymentStore'
import './style.css'

const CreditCard: React.FC = () => {
	const paymentStore = useStoreMap({
		store: PaymentStore,
		keys: [],
		fn: (state) => state.payment,
	})

	const payment = React.useMemo<Payment>(() => {
		return (
			paymentStore ||
			({
				cardName: '',
				cardNumber: '',
				cvv: '',
				validate: '',
			} as Payment)
		)
	}, [paymentStore])

	return (
		<Box>
			<Cards
				cvc={payment.cvv}
				expiry={payment.validate}
				name={payment.cardName}
				number={payment.cardNumber}
			/>
		</Box>
	)
}

export default CreditCard
