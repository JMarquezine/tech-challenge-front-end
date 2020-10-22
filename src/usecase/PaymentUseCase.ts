import { toast } from 'react-toastify'
import Payment from '../domains/Payment'
import * as PaymentService from '../service/PaymentService'

const executePayment = (payment: Payment): Promise<void> => {
	return PaymentService.upsert(payment)
		.then(() => {
			toast('Pedido realizado com sucesso')
		})
		.catch((error) => {
			toast.error('Não foi possível processar seu pedido')
			console.log(error)
		})
}

export { executePayment }
