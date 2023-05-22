import React from 'react'

export function MaintenanceView() {
	return (
		<div className='container mx-auto w-3/4 flex flex-col items-center mt-20 gap-y-8'>
			<div className=' absolute left-5 top-3'>
				<img src='./img/logo.png' alt='Logo Larri' className='w-32' />
			</div>
			<img
				src='/img/maintenance-ilustration.png'
				alt=''
				className='w-[700px] h-auto'
			/>
			<h2 className='text-5xl font-bold text-newDark'>
				Estamos realizando labores de{' '}
				<span className='text-primary'>mantenimiento</span>, volveremos{' '}
				<span className='text-primary'>pronto.</span>
			</h2>
		</div>
	)
}
