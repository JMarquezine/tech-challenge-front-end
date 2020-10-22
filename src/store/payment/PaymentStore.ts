import { createStore } from 'effector'
import PaymentState from './PaymentState'
import * as PaymentEvents from './PaymentEvents'

const initialState: PaymentState = {
	payment: null,
}

const PaymentStore = createStore(initialState).on(
	PaymentEvents.setPayment,
	(state, payment) => ({
		...state,
		payment,
	})
)

export default PaymentStore
