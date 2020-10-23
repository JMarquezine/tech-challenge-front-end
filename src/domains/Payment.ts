import PaymentRateType from './enums/PaymentRateType'

interface Payment {
	paymentId?: string
	cardNumber: string
	cardName: string
	validate: string
	cvv: string
	paymentRate: PaymentRateType
}

export default Payment
