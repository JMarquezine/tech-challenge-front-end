import { createStore } from 'effector'
import PaymentState from './PaymentState'
import * as PaymentEvents from './PaymentEvents'

const initialState: PaymentState = {
	payment: null,
	focused: undefined,
	isCardNumberValid: false,
}

const PaymentStore = createStore(initialState)
	.on(PaymentEvents.setPayment, (state, payment) => ({
		...state,
		payment,
	}))
	.on(PaymentEvents.setFocused, (state, focused) => ({
		...state,
		focused,
	}))
	.on(PaymentEvents.setCardNumberValid, (state, isCardNumberValid) => ({
		...state,
		isCardNumberValid,
	}))
	.reset(PaymentEvents.reset)

export default PaymentStore
