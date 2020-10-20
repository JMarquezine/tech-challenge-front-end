import React from 'react'
import { Box } from '@material-ui/core'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import { ReactComponent as StepCompleted } from '../../../../svg/StepCompleted.svg'
import { ReactComponent as EllipseCompleted } from '../../../../svg/EllipseCompleted.svg'
import useStyle from './style'

const PaymentPath: React.FC = () => {
	const classes = useStyle()
	return (
		<Box className={classes.root}>
			<EllipseCompleted className={classes.ellipse} />
			<StepCompleted className={classes.step} />
			Carrinho <ChevronRightIcon />
			<div className={classes.ellipseEmpty}>2</div> Pagamento{' '}
			<ChevronRightIcon />
			<div className={classes.ellipseEmpty}>3</div> Confirmação
		</Box>
	)
}

export default PaymentPath
