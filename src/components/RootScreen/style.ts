import { createStyles, makeStyles } from '@material-ui/core/styles'

const style = makeStyles(() =>
	createStyles({
		root: {
			top: '186px',
			zIndex: 100,
			position: 'absolute',
		},
		main: {
			width: '100%',
			height: '100%',
			overflow: 'hidden',
			background: '#F7F7F7 0% 0% no-repeat padding-box',
		},
	})
)

export default style
