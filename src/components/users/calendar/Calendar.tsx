import React from 'react'
import { Month } from './Month'

export function Calendar() {
	return (
		<div className='flex flex-col lg:flex-row justify-between gap-y-10'>
			<Month month='Marzo' firstDay='col-start-4' />
			<Month month='Abril' firstDay='col-start-7' />
		</div>
	)
}
