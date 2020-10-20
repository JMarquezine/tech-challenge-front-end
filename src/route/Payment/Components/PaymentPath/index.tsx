import React from 'react'
import { Box } from '@material-ui/core'
import { ReactComponent as StepCompleted } from '../../../../svg/StepCompleted.svg'
import { ReactComponent as EllipseCompleted } from '../../../../svg/EllipseCompleted.svg'
import useStyle from './style'

const PaymentPath: React.FC = () => {
	const classes = useStyle()
	return (
		<Box className={classes.root}>
			<EllipseCompleted className={classes.ellipse} />
			<StepCompleted className={classes.step} />
			Carrinho &gt; Pagamento &gt; Confirmação
		</Box>
	)
}

export default PaymentPath
