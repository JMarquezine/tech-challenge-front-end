import { toast } from 'react-toastify'
import { v4 as uuid } from 'uuid'
import Payment from '../domains/Payment'
import * as PaymentService from '../service/PaymentService'

const executePayment = (payment: Payment): Promise<void> => {
	return PaymentService.upsert({
		...payment,
		paymentId: uuid(),
	})
		.then(() => {
			toast('Pedido realizado com sucesso')
		})
		.catch((error) => {
			toast.error('Não foi possível processar seu pedido')
			console.error(error)
		})
}

export { executePayment }
