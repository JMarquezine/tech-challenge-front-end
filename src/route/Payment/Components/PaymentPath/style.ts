import { createStyles, makeStyles } from '@material-ui/core/styles'

const style = makeStyles(() =>
	createStyles({
		root: { color: '#DE4B4B' },
		ellipse: { top: '5px', position: 'relative' },
		step: {
			right: '17px',
			bottom: '1px',
			position: 'relative',
		},
	})
)

export default style
