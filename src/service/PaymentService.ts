import axios from 'axios'
import Payment from '../domains/Payment'

const axiosInstance = axios.create()

const upsert = (payment: Payment): Promise<void> => {
	return axiosInstance
		.put<void>(`payment/${payment.cardName}`, {
			...payment,
		})
		.then((response) => response.data)
}

export { upsert }
