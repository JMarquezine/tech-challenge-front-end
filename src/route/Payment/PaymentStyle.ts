import { createStyles, makeStyles } from '@material-ui/core/styles'

const paymentStyle = makeStyles(() =>
	createStyles({
		root: { height: '596px' },
		firstGrid: { backgroundColor: '#DE4B4B' },
		secondGrid: { backgroundColor: '#FFFFFF' },
		paymentForm: {
			paddingLeft: '168px',
			paddingRight: '64px',
			paddingTop: '55px',
		},
	})
)

export default paymentStyle
