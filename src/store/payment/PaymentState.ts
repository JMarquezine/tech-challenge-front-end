import { Focused } from 'react-credit-cards'
import Payment from '../../domains/Payment'

interface PaymentState {
	payment: Payment | null
	focused?: Focused
	isCardNumberValid: boolean
}

export default PaymentState
