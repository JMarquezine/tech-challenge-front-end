import { createEvent } from 'effector'
import Payment from '../../domains/Payment'

export const setPayment = createEvent<Payment>('setPayment')
