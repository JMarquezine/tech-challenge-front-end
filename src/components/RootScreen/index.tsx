import React, { ReactNode } from 'react'
import { Grid } from '@material-ui/core'
import useStyle from './style'

type Props = {
	children: ReactNode
}

const RootScreen: React.FC<Props> = ({ children }: Props) => {
	const classes = useStyle()
	return (
		<>
			<main className={classes.main}>
				<Grid
					container
					spacing={0}
					alignContent="center"
					justify="center"
					alignItems="center"
					className={classes.root}
					md={12}
				>
					<Grid item md={10} xs={10}>
						{children}
					</Grid>
				</Grid>
			</main>
		</>
	)
}

export default RootScreen
