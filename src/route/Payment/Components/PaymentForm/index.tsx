import { Grid, MenuItem, TextField } from '@material-ui/core'
import React, { ChangeEvent, FocusEvent, useEffect, useState } from 'react'
import { Focused } from 'react-credit-cards'
import ReactInputMask from 'react-input-mask'
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

	const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
		const { name } = event.target
		PaymentEvents.setFocused(name as Focused)
	}
	const handleBlur = () => {
		PaymentEvents.setFocused(undefined)
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
				<ReactInputMask
					value={payment.cardNumber}
					mask="9999 9999 9999 9999"
					maskChar=" "
					onFocus={handleFocus}
					onChange={handleInputChange}
					onBlur={handleBlur}
				>
					{() => (
						<TextField
							id="cardNumber"
							name="number"
							label="Número do Cartão"
							value={payment.cardNumber}
							fullWidth
						/>
					)}
				</ReactInputMask>
			</Grid>
			<Grid item xs={12}>
				<TextField
					id="cardName"
					label="Nome (igual ao cartão)"
					name="name"
					value={payment.cardName}
					fullWidth
					onChange={handleInputChange}
					onFocus={handleFocus}
					onBlur={handleBlur}
				/>
			</Grid>
			<Grid item xs={6}>
				<ReactInputMask
					value={payment.validate}
					mask="99/99"
					maskChar=" "
					onChange={handleInputChange}
					onFocus={handleFocus}
					onBlur={handleBlur}
				>
					{() => (
						<TextField
							id="validate"
							label="Validade"
							name="expiry"
							value={payment.validate}
							fullWidth
						/>
					)}
				</ReactInputMask>
			</Grid>
			<Grid item xs={6}>
				<ReactInputMask
					value={payment.cvv}
					mask="999"
					maskChar=" "
					onChange={handleInputChange}
					onFocus={handleFocus}
					onBlur={handleBlur}
				>
					{() => (
						<TextField
							id="cvv"
							name="cvc"
							label="CVV"
							value={payment.cvv}
							fullWidth
						/>
					)}
				</ReactInputMask>
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
