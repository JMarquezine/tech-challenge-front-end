import React from 'react'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'

type Props = {
	position: 'left' | 'right'
}

const Chevron: React.FC<Props> = ({ position }: Props) => {
	const chevronEl =
		position === 'left' ? <ChevronLeftIcon /> : <ChevronRightIcon />

	return chevronEl
}

export default Chevron
