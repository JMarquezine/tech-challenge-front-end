import { Grid, MenuItem, TextField } from '@material-ui/core'
import React, { ChangeEvent, useEffect, useState } from 'react'
import PaymentRateType from '../../../../domains/enums/PaymentRateType'
import Payment from '../../../../domains/Payment'
import * as PaymentEvents from '../../../../store/payment/PaymentEvents'

const PaymentForm: React.FC = () => {
	const [payment, setPayment] = useState<Payment>({
		cardName: '',
		cardNumber: '',
		cvv: '',
		validate: '',
	} as Payment)

	const handleInputChange = (
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { id, value } = event.target
		setPayment({
			...payment,
			[id]: value,
		})
	}

	const handleSelectChange = (
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { value } = event.target
		setPayment({ ...payment, paymentRate: value as PaymentRateType })
	}

	useEffect(() => {
		PaymentEvents.setPayment(payment)
	}, [payment])

	return (
		<Grid container spacing={2}>
			<Grid item xs={12}>
				<TextField
					id="cardNumber"
					label="Número do Cartão"
					value={payment.cardNumber}
					fullWidth
					onChange={handleInputChange}
				/>
			</Grid>
			<Grid item xs={12}>
				<TextField
					id="cardName"
					label="Nome (igual ao cartão)"
					value={payment.cardName}
					fullWidth
					onChange={handleInputChange}
				/>
			</Grid>
			<Grid item xs={6}>
				<TextField
					id="validate"
					label="Validade"
					value={payment.validate}
					fullWidth
					onChange={handleInputChange}
				/>
			</Grid>
			<Grid item xs={6}>
				<TextField
					id="cvv"
					label="CVV"
					value={payment.validate}
					fullWidth
					onChange={handleInputChange}
				/>
			</Grid>
			<Grid item xs={12}>
				<TextField
					id="paymentRate"
					label="Número de Parcelas"
					value={payment.paymentRate}
					select
					fullWidth
					onChange={handleSelectChange}
				>
					{Object.keys(PaymentRateType).map((key) => (
						<MenuItem key={key} value={key}>
							{PaymentRateType[key as keyof typeof PaymentRateType]}
						</MenuItem>
					))}
				</TextField>
			</Grid>
		</Grid>
	)
}

export default PaymentForm
