import { Box } from '@material-ui/core'
import React from 'react'
import { ReactComponent as CreditCardFilled } from '../../../../svg/CreditCardFilled.svg'
import { ReactComponent as CreditCardEmpty } from '../../../../svg/CreditCardEmpty.svg'
import { ReactComponent as CreditCardBackFilled } from '../../../../svg/CreditCardBackFilled.svg'
import { ReactComponent as CreditCardBackEmpty } from '../../../../svg/CreditCardBackEmpty.svg'

const CreditCard: React.FC = () => {
	return (
		<Box>
			<CreditCardEmpty />
			{/* <CreditCardFilled /> */}
		</Box>
	)
}

export default CreditCard
