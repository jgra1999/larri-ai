import React from 'react'
import { ErrorMessage, Field } from 'formik'

type InputProps = {
	label: string
	name: string
	icon: React.ReactNode
	inputType: string
	step?: number
	placeholder: string
	validate?: any
	value?: string | number | Date
}

export function FormikInput({
	label,
	icon,
	inputType,
	placeholder,
	name,
	step,
	validate,
	value
}: InputProps) {
	return (
		<div className='relative'>
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
				<Field
					type={inputType}
					name={name}
					className='bg-gray-50 border border-gray-300 text-gray-900 text-lg md:text-sm rounded-lg focus:ring-gray-400 focus:border-gray-400 block w-full pl-12 p-2.5 outline-none'
					placeholder={placeholder}
					validate={validate}
					value={value}
				/>
			</div>
			<ErrorMessage name={name}>
				{(msg) => (
					<div className='text-red-600 font-medium text-xs absolute -bottom-5 left-0'>
						{msg}
					</div>
				)}
			</ErrorMessage>
		</div>
	)
}
