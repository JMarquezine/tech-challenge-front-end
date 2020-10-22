import { Box } from '@material-ui/core'
import { useStoreMap } from 'effector-react'
import React from 'react'
import Cards, { CallbackArgument } from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'
import Payment from '../../../../domains/Payment'
import PaymentStore from '../../../../store/payment/PaymentStore'
import * as PaymentEvents from '../../../../store/payment/PaymentEvents'
import './style.css'

const CreditCard: React.FC = () => {
	const { paymentStore, focused, isCardNumberValid } = useStoreMap({
		store: PaymentStore,
		keys: [],
		fn: (state) => ({
			paymentStore: state.payment,
			focused: state.focused,
			isCardNumberValid: state.isCardNumberValid,
		}),
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

	const handleCallBack = (type: CallbackArgument, isValid: boolean) => {
		if (isValid !== isCardNumberValid) {
			PaymentEvents.setCardNumberValid(isValid)
		}
	}

	return (
		<Box>
			<Cards
				cvc={payment.cvv}
				focused={focused}
				expiry={payment.validate}
				name={payment.cardName}
				number={payment.cardNumber}
				callback={handleCallBack}
			/>
		</Box>
	)
}

export default CreditCard
