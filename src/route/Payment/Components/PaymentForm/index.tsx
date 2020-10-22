import { Box, Button, Grid, MenuItem, TextField } from '@material-ui/core'
import React, { ChangeEvent, FocusEvent, useEffect, useState } from 'react'
import { Focused } from 'react-credit-cards'
import ReactInputMask from 'react-input-mask'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useStoreMap } from 'effector-react'
import PaymentRateType from '../../../../domains/enums/PaymentRateType'
import Payment from '../../../../domains/Payment'
import * as PaymentEvents from '../../../../store/payment/PaymentEvents'
import PaymentStore from '../../../../store/payment/PaymentStore'
import useStyle from './style'
import { executePayment } from '../../../../usecase/PaymentUseCase'

const PaymentForm: React.FC = () => {
	const { isCardNumberValid, paymentStore } = useStoreMap({
		store: PaymentStore,
		keys: [],
		fn: (state) => ({
			isCardNumberValid: state.isCardNumberValid,
			paymentStore: state.payment,
		}),
	})

	const defaultPayment = {
		cardName: '',
		cardNumber: '',
		cvv: '',
		validate: '',
		paymentRate: PaymentRateType.SemJuros12,
	} as Payment

	const [payment, setPayment] = useState<Payment>(defaultPayment)

	const paymentSchema = React.useMemo(() => {
		return yup.object().shape({
			number: yup
				.string()
				.required('Insira o Número do Cartão')
				.test(
					'validNumber',
					'Número de cartão inválido',
					() => isCardNumberValid
				),
			name: yup.string().required('Insira o Nome'),
			expiry: yup.string().required('Insira a Validade'),
			cvc: yup.string().required('Insira o CVV do Cartão'),
		})
	}, [isCardNumberValid])

	const { register, handleSubmit, errors, reset } = useForm({
		resolver: yupResolver(paymentSchema),
	})

	const classes = useStyle({ hasErrors: !!errors })

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

	const onSubmit = handleSubmit(() => {
		if (paymentStore) {
			executePayment(paymentStore).then(() => {
				setPayment(defaultPayment)
				reset()
			})
		}
	})

	useEffect(() => {
		PaymentEvents.setPayment(payment)
	}, [payment])

	return (
		<form onSubmit={onSubmit}>
			<Grid container spacing={2} className={classes.root}>
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
								error={errors.number}
								helperText={errors.number?.message}
								id="cardNumber"
								name="number"
								label="Número do Cartão"
								inputRef={register}
								value={payment.cardNumber}
								fullWidth
							/>
						)}
					</ReactInputMask>
				</Grid>
				<Grid item xs={12}>
					<TextField
						error={errors.name}
						helperText={errors.name?.message}
						id="cardName"
						label="Nome (igual ao cartão)"
						name="name"
						value={payment.cardName}
						inputRef={register}
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
								error={errors.expiry}
								helperText={errors.expiry?.message}
								id="validate"
								label="Validade"
								name="expiry"
								inputRef={register}
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
								error={errors.cvc}
								helperText={errors.cvc?.message}
								id="cvv"
								name="cvc"
								inputRef={register}
								label="CVV"
								value={payment.cvv}
								fullWidth
							/>
						)}
					</ReactInputMask>
				</Grid>
				<Grid item xs={12}>
					<TextField
						error={errors.paymentRate}
						helperText={errors.paymentRate?.message}
						id="paymentRate"
						name="paymentRate"
						label="Número de Parcelas"
						value={payment.paymentRate}
						select
						fullWidth
						onChange={handleSelectChange}
					>
						{Object.keys(PaymentRateType).map((key) => (
							<MenuItem
								key={key}
								value={PaymentRateType[key as keyof typeof PaymentRateType]}
							>
								{PaymentRateType[key as keyof typeof PaymentRateType]}
							</MenuItem>
						))}
					</TextField>
				</Grid>
			</Grid>
			<Box
				display="inline-flex"
				justifyContent="flex-end"
				alignContent="flex-end"
				width="100%"
			>
				<Button
					size="large"
					variant="contained"
					color="secondary"
					className={classes.submitButton}
					type="submit"
				>
					Continuar
				</Button>
			</Box>
		</form>
	)
}

export default PaymentForm
