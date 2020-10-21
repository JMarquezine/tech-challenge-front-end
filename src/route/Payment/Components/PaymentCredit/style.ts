import { createStyles, makeStyles } from '@material-ui/core/styles'

const style = makeStyles(() =>
	createStyles({
		root: {
			color: '#FFFFFF',
			paddingTop: '51px',
			paddingLeft: '64px',
			paddingRight: '16px',
		},
		changePayment: {
			display: 'inline-flex',
			alignItems: 'center',
			justifyContent: 'center',
			fontSize: '13px',
			paddingBottom: '51px',
		},
		addNewCreditCard: {
			fontSize: '20px',
			fontWeight: 'bold',
			paddingBottom: '31px',
		},
		addNewCreditCardText: {
			paddingLeft: '15px',
		},
	})
)

export default style
