import { createEvent } from 'effector'
import { Focused } from 'react-credit-cards'
import Payment from '../../domains/Payment'

export const setPayment = createEvent<Payment>('setPayment')
export const setFocused = createEvent<Focused | undefined>('setFocused')
export const setCardNumberValid = createEvent<boolean>('setCardNumberValid')
export const reset = createEvent('reset')
