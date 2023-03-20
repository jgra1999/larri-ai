import React from 'react'

type InputFileProps = {
	name: string
	label: string
	icon: React.ReactNode
}

export function InputFiles({ name, label, icon }: InputFileProps) {
	return (
		<div className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-400 focus:border-gray-400 block w-full pl-12 p-2.5 outline-none'>
			<div className='relative'>
				<div className='absolute inset-y-px -left-9 flex items-center pointer-events-none'>
					{icon}
				</div>
				<input type='file' name={name} id='' />
				<label
					htmlFor={name}
					className='block mt-px text-sm font-medium text-gray-400'
				>
					{label}
				</label>
			</div>
		</div>
	)
}
