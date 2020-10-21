import React from 'react'
import { Box } from '@material-ui/core'
import { ReactComponent as StepCompleted } from '../../../../svg/StepCompleted.svg'
import { ReactComponent as EllipseCompleted } from '../../../../svg/EllipseCompleted.svg'
import useStyle from './style'
import Chevron from '../../../../components/Chevron'

const PaymentPath: React.FC = () => {
	const classes = useStyle()
	return (
		<Box
			className={classes.root}
			width="100%"
			alignItems="center"
			justifyContent="space-between"
			display="inline-flex"
		>
			<span>
				<EllipseCompleted className={classes.ellipse} />
				<StepCompleted className={classes.step} />
			</span>
			Carrinho <Chevron position="right" />{' '}
			<div className={classes.ellipseEmpty}>2</div> Pagamento{' '}
			<Chevron position="right" /> <div className={classes.ellipseEmpty}>3</div>{' '}
			Confirmação
		</Box>
	)
}

export default PaymentPath
