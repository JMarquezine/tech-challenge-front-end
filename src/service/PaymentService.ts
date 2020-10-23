import axios from 'axios'
import Payment from '../domains/Payment'

const axiosInstance = axios.create()

const upsert = (payment: Payment): Promise<void> => {
	return axiosInstance
		.post<void>(`http://localhost:3001/payment/`, {
			...payment,
		})
		.then((response) => response.data)
}

export { upsert }
