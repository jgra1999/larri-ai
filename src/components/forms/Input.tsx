import React from 'react'
import { eForm } from '@/types/form'

type InputProps = {
	label: string
	name: string
	icon: React.ReactNode
	inputType: string
	placeholder: string
}

export function Input({ label, icon, inputType, placeholder, name }: InputProps) {
	return (
		<div>
			<label
				htmlFor={name}
				className='block mb-2 text-lg md:text-sm font-normal text-gray-500'
			>
				{label}
			</label>
			<div className='relative'>
				<div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
					{icon}
				</div>
				<input
					type={inputType}
					name={name}
					className='bg-gray-50 border border-gray-300 text-gray-900 text-lg md:text-sm rounded-lg focus:ring-gray-400 focus:border-gray-400 block w-full pl-12 p-2.5 outline-none'
					placeholder={placeholder}
				/>
			</div>
		</div>
	)
}
