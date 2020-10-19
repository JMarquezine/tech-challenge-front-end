import { Grid } from '@material-ui/core'
import React from 'react'

const Payment: React.FC = () => {
	return (
		<Grid container md={12}>
			<Grid item md={3} style={{ backgroundColor: '#DE4B4B', height: '596px' }}>
				Test
			</Grid>
			<Grid item md={9} style={{ backgroundColor: '#FFFFFF', height: '596px' }}>
				Test
			</Grid>
		</Grid>
	)
}

export default Payment
