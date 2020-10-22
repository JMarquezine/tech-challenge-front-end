import { createStyles, makeStyles } from '@material-ui/core/styles'

const style = makeStyles(() =>
	createStyles({
		root: {
			paddingBottom: (props: { hasErrors: boolean }): string =>
				props.hasErrors ? '41px' : '62px',
		},
		submitButton: {
			backgroundColor: '#DE4B4B',
			'&:hover': {
				backgroundColor: '#DE4B4B',
			},
		},
	})
)

export default style
