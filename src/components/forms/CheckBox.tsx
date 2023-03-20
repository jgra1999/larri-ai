import React from 'react'

type CheckBoxProps = {
	text: string
	name: string
}

export function Checkbox({ text, name }: CheckBoxProps) {
	return (
		<div>
			<input type='checkbox' id={name} className='hidden' />
			<label
				htmlFor={name}
				className='inline-block
								py-1
					  			pr-4
					  			pl-10
								text-sm
                                text-gray-500
								font-medium
								relative
								cursor-pointer
								transition-all
								duration-300
								before:content-[""]
								before:w-4
								before:h-4
								before:inline-block
								before:border-2
								before:border-gray-300
								before:bg-white
                                before:rounded
								before:absolute
								before:top-2
								before:left-3'
			>
				{text}
			</label>
		</div>
	)
}
