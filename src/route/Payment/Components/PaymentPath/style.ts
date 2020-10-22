import { createStyles, makeStyles } from '@material-ui/core/styles'

const style = makeStyles(() =>
	createStyles({
		root: { color: '#DE4B4B', paddingBottom: '71px' },
		ellipse: { position: 'relative' },
		ellipseEmpty: {
			width: '22px',
			height: '22px',
			border: '1px solid',
			borderRadius: '50%',
			display: 'inline-flex',
			alignItems: 'center',
			justifyContent: 'center',
			position: 'relative',
			bottom: '2px',
			fontWeight: 'bold',
		},
		step: {
			right: '17px',
			bottom: '6px',
			position: 'relative',
		},
	})
)

export default style
