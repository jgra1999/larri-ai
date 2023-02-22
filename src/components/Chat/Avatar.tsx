import React from 'react'

type Props = {
	children: React.ReactElement
}

export function Avatar({ children }: Props) {
	return (
		<figure className='w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center'>
			{children}
		</figure>
	)
}
