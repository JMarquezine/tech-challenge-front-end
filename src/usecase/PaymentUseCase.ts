import Payment from '../domains/Payment'
import * as PaymentService from '../service/PaymentService'

const executePayment = (payment: Payment): Promise<void> => {
	return PaymentService.upsert(payment)
		.then()
		.catch((error) => {
			throw error
		})
}

export { executePayment }
