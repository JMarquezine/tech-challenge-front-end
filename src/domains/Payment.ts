import PaymentRateType from './enums/PaymentRateType'

interface Payment {
	cardNumber: string
	cardName: string
	validate: string
	cvv: string
	paymentRate: PaymentRateType
}

export default Payment
