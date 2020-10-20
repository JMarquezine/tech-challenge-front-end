import { Grid, MenuItem, TextField } from '@material-ui/core'
import React from 'react'

const paymentsRates = [
	{
		value: '12',
		label: '12x R$1.000,00 sem juros',
	},
	{
		value: '6',
		label: '6x R$2.000,00 sem juros',
	},
]

const PaymentForm: React.FC = () => {
	return (
		<Grid container spacing={2}>
			<Grid item xs={12}>
				<TextField
					id="cardNumber"
					type="number"
					label="Número do Cartão"
					fullWidth
				/>
			</Grid>
			<Grid item xs={12}>
				<TextField id="cardName" label="Nome (igual ao cartão)" fullWidth />
			</Grid>
			<Grid item xs={6}>
				<TextField id="cardValidate" label="Validade" fullWidth />
			</Grid>
			<Grid item xs={6}>
				<TextField id="cardCVV" label="CVV" fullWidth />
			</Grid>
			<Grid item xs={12}>
				<TextField
					id="paymentRates"
					label="Número de Parcelas"
					select
					fullWidth
				>
					{paymentsRates.map((option) => (
						<MenuItem key={option.value} value={option.value}>
							{option.label}
						</MenuItem>
					))}
				</TextField>
			</Grid>
		</Grid>
	)
}

export default PaymentForm
